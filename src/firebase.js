import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgosIQrHb-wIM4mnCxPOYAyWm0OZq18co",
  authDomain: "portfolio-tadisetti-akshaya.firebaseapp.com",
  projectId: "portfolio-tadisetti-akshaya",
  storageBucket: "portfolio-tadisetti-akshaya.firebasestorage.app",
  messagingSenderId: "453394797890",
  appId: "1:453394797890:web:38016addbc298b5d7e24db",
  measurementId: "G-5JB8M3QFWS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

isSupported()
  .then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  })
  .catch((error) => {
    console.warn("Firebase Analytics is unavailable:", error);
  });

export default app;