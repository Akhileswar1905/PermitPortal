import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `${v4()}.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Upload is in an unknown state");
        }
      },
      (error) => {
        console.log(error.message);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          })
          .catch(reject);
      }
    );
  });
};
