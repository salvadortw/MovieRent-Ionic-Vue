import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../config/firebaseConfig";

// Función para registrar usuario
export const registerUser = async (email: string, name: string, password: string) => {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await saveUserNameInFirestore(user.uid, name, email);
    return true;
  } catch (error: any) {
    console.error("Error al registrar el usuario:", error.message || error);
    throw new Error("Hubo un error al registrar el usuario.");
  }
};

// Guardar el nombre del usuario en Firestore
const saveUserNameInFirestore = async (uid: string, name: string, email: string) => {
  const db = getFirestore();
  try {
    await setDoc(doc(db, "users", uid), {
      name: name,
      email: email,
      createdAt: new Date(), 
    });
    console.log("Nombre guardado en Firestore");
  } catch (error) {
    console.error("Error al guardar el nombre en Firestore:", error);
  }
};

// Función para iniciar sesión
export const loginUser = async (email: string, password: string) => {
  const db = getFirestore();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userRef = doc(db, "users", userCredential.user.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();

    if (userData) {
      return {
        uid: userCredential.user.uid,
        name: userData.name,
      };
    }
    throw new Error("El nombre del usuario no se encuentra en Firestore.");
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error.message || error);
    throw error;
  }
};

// Función para cerrar sesión
export const logoutUser = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    console.log("Sesión cerrada correctamente.");
  } catch (error: any) {
    console.error("Error al cerrar sesión:", error.message || error);
    throw new Error("No se pudo cerrar la sesión.");
  }
};

// Función para obtener el usuario autenticado
export const getCurrentUser = () => {
  const db = getFirestore();
  return new Promise<any>((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            resolve({
              uid: user.uid,
              email: user.email,
              name: userData?.name || "",
            });
          } else {
            reject("No se encontraron los datos del usuario.");
          }
        } catch (error) {
          reject("Error al obtener los datos del usuario: " + error);
        }
      } else {
        resolve(null); 
      }
    });
  });
};