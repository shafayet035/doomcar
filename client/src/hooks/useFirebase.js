import { useEffect, useState } from "react";
import initFirebase from "../firebase/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Axios from "../config/instance";

initFirebase();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
        Axios.get(`/user/${user.email}`).then((res) => {
          setRole(res.data.role);
          setIsAdmin(res.data.isAdmin ? res.data.isAdmin : null);
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsub;
  }, [auth]);

  const registerUser = (fullName, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            Axios.post("/user/", { fullName, email, role: "member" }).then(
              (res) => {
                console.log(res);
              }
            );
          })
          .catch((error) => {
            console.log(error);
          });

        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const signInUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const uploadImage = async (image) => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `cars/${image?.name.split(".")[0]}-${
        Date.now() + Math.random(321654561231321)
      }`
    );
    let imageUrl;

    await uploadBytes(storageRef, image).then(async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      imageUrl = url;
    });

    return imageUrl;
  };

  return {
    uploadImage,
    user,
    logOut,
    loading,
    error,
    registerUser,
    signInUser,
    role,
    isAdmin,
  };
};

export default useFirebase;
