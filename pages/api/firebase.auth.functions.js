import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../persistence/firebase.config.js";

const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUser = async (email, password, employeeNum) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (email, password) => {
  const user = auth.currentUser;

  if (user) {
    try {
      user.updateProfile({
        email: email,
        password: password,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    console.log("No user is currently logged in.");
  }
};

const deleteUser = async () => {
  const user = auth.currentUser;

  if (!user) {
    console.log("No user is currently logged in!");
    throw new Error("No user is currently logged in");
  }

  try {
    console.log("Deleted user:", user.uid);
    return deleteUser(user);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createUser, loginUser, updateUser, logoutUser, deleteUser };
