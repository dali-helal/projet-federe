import Student from "../models/Student.js";
import Prof from "../models/Prof.js";
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });

    if (student) {
      var match = password === student.password;

      if (match === true) {
        return res.status(200).json({
          status: "ok",
          token: generateToken(student._id),
          user: student.nom,
          email: student.email,
          cle: "etudiant",
        });
      } else {
        return res.status(401).json({
          status: "unauthorised",
          msg: "incorrect password",
        });
      }
    }

    const prof = await Prof.findOne({ email });

    if (prof) {
      var match = password === prof.password;

      if (match === true) {
        return res.status(200).json({
          status: "ok",
          token: generateToken(prof._id),
          user: prof.nom,
          email: prof.email,
          cle: "prof",
        });
      } else {
        return res.status(401).json({
          status: "unauthorised",
          msg: "incorrect password",
        });
      }
    }

    const admin = await Admin.findOne({ email });

    if (admin) {
      var match = password === admin.password;

      if (match === true) {
        return res.status(200).json({
          status: "ok",
          token: generateToken(admin._id),
          user: admin.nom,
          email: admin.email,
          cle: "Admin",
        });
      } else {
        return res.status(401).json({
          status: "unauthorised",
          msg: "incorrect password",
        });
      }
    }

    if (!admin && !prof && !student) {
      return res.status(404).json({
        status: "exists",
        msg: "user doesn't exist",
      });
    }
  } catch (err) {
    return res.status(404).json({
      error: "user not found",
    });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
