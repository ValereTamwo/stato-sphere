import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";
const auth = getAuth(firebaseConfig);


export default async function signUp(email: string, password:string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}