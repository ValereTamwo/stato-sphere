import firebase_app from "../firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getCollectionData(collectionName: string) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);

    const data: any[] = [];

    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      // If you have a timestamp field in your documents, convert it to a JavaScript Date object
      if (docData.date) {
        docData.date = docData.date.toDate(); // Assuming it's a Firebase Timestamp
      }
      data.push(docData);
    });

    return { data };
  } catch (error) {
    return { error };
  }
}
