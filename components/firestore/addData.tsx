import firebase_app from "../firebaseConfig";
import { getFirestore, doc, setDoc, addDoc ,collection,updateDoc} from "firebase/firestore";
import { getStorage, ref, uploadString,uploadBytes ,getDownloadURL} from "firebase/storage";
import { Timestamp } from "firebase/firestore";
const db = getFirestore(firebase_app);
const storage = getStorage();
const storageref = ref(storage)

interface ResultsData {
  competitionName: string;
  candidatesCount: number;
  admittedCount: number;
  sessionYear: number;
  successRate: number;
  bannerImage: File;
  date: Timestamp;
   id:string;
}

interface ExamsData {
  competitionName: string;
  bannerImage: File;
  subjects: string;
  courseList: string;
   id:string;
}

interface AnnoncesData {
  date: Timestamp;
  Title: string;
  bannerImage: File;
  description: string;
  usefulLinks: string;
   id:string;
}

type CollectionData = ResultsData | ExamsData | AnnoncesData;

export default async function addData(
  // collections: "results" | "exams" | "annonces",
  collections: string,
  data: CollectionData
) {
  let result: any = null;
  let error: any = null;

  try {
     const collectionRef = collection(db, collections);
    result = await addDoc(collectionRef, { ...data, bannerImage: '' }); // We're initializing bannerImage as an empty string, will be replaced with the storage URL

    if (data.bannerImage) {
      const bannerImageRef = ref(storage, `${collections}/${result.id}/bannerImage`);
      await uploadBytes(bannerImageRef, await data.bannerImage.arrayBuffer());
      const downloadURL = await getDownloadURL(bannerImageRef);
      const docRef = doc(db, collections, result.id);
      await updateDoc(docRef, { bannerImage: downloadURL });    }
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
