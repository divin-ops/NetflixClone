
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDAdK0SyUjlaDHI-HaVVHeVkhT7bWePhoo",
  authDomain: "netflix-8976f.firebaseapp.com",
  projectId: "netflix-8976f",
  storageBucket: "netflix-8976f.firebasestorage.app",
  messagingSenderId: "99459605751",
  appId: "1:99459605751:web:cd622f934274ca8a635ff2"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)

const signup=async(name,email,password)=>{
    try{
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user
    addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    })
    }catch(error)
    {
        console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(" "))

    }


}


const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)

    }catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))

    }
}

const logout=()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}