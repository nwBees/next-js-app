import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../persistence/firebase.config.js";

import { firestore } from "../../persistence/firebase.config.js";
import { addDoc, collection } from "@firebase/firestore";

const adminsRef = collection(firestore, "admins");

const createAdmin = async (
  uid,
  firstName,
  lastName,
  email,
  password,
  dob,
  pictureId,
  credentials
) => {
  try {
    const picIdImageRef = ref(storage, `images/${pictureId.name}`);
    const picIdSnapshot = await uploadBytes(
      picIdImageRef,
      pictureId
    );
    console.log("Image uploaded:", picIdSnapshot.ref.fullPath);

    // Get the download URL for the uploaded image
    const picIdUrl = await getDownloadURL(picIdImageRef);
    console.log("Download URL:", picIdUrl);

    const credentialsImageRef = ref(storage, `images/${credentials.name}`);
    const credentialsPicSnapshot = await uploadBytes(
      credentialsImageRef,
      credentials
    );
    console.log("Image uploaded:", credentialsPicSnapshot.ref.fullPath);

    // Get the download URL for the uploaded image
    const credentialsUrl = await getDownloadURL(credentialsImageRef);
    console.log("Download URL:", credentialsUrl);

    const data = {
      id: uid,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      dob: dob,
      isVerified: false,
      pictureId: picIdUrl,
      certification: credentialsUrl,
    };
    await addDoc(adminsRef, data);
    console.log("Image URL stored in Cloud Firestore");
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export { createAdmin };
