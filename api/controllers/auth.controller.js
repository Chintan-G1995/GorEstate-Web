import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //db operation
    const hashedPassword = await bcrypt.hash(password, 10);
    //Create a new user and save to db
    console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User Created" });
  } catch (err) {
    console.log("Data Not Registered");
    console.log(err);
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // CHECK IF THE USER EXISTS
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // GENERATE COOKIE TOKEN AND SEND TO THE USER
    const age = 1000 * 60 * 60 * 24 * 7; // 7 days in milliseconds

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age / 1000 } // jwt expects seconds
    );

    // Remove password from user object before sending
    const { password: userPassword, ...userInfo } = user;

    // Set cookies and send single response
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: age,
      })
      // If you need to set additional cookies, chain them here
      // .cookie("anotherCookie", "value", { ... })
      .status(200)
      .json(userInfo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};


export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({message:"Logout Successfully"})
};