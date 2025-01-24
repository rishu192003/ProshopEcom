import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, admin, getUsers).post(registerUser); //we can put both methods like this for get nd post

router.post("/logout", logoutUser); // here we have only one req type so using .post directly

router.post("/auth", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
