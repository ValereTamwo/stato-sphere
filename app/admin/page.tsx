'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { AuthContext } from '@/components/context/AuthContext';
import { useAuthContext } from '@/components/context/AuthContext';
import addData from '@/components/firestore/addData';
import { doc } from 'firebase/firestore';
import { Timestamp } from "firebase/firestore";
import { FieldValue } from 'firebase/firestore';
import moment from 'moment';
import getCollectionData from '@/components/firestore/getData';
import uuid from 'react-uuid';
import Image from 'next/image';
import deleteDocument from '@/components/firestore/deleteData';
import { getFirestore,deleteDoc } from 'firebase/firestore';
import firebase_app from '@/components/firebaseConfig';
import deleteData from '@/components/firestore/deleteData';
import updateData from '@/components/firestore/updateData';

const db = getFirestore(firebase_app)


const currentTimestamp = moment();
const formattedTimestamp = currentTimestamp.format('YYYY-MM-DD HH:mm:ss');
const parsedTimestamp = new Date(formattedTimestamp);
const firebaseTimestamp =  Timestamp.fromDate(parsedTimestamp);
interface Document {
  id: string;
  [key: string]: string | number;
}

interface ResultsData {
  competitionName: string;
  candidatesCount: number;
  admittedCount: number;
  sessionYear: number;
  successRate: number;
  bannerImage: string|File;
  date: Timestamp;
  id: string;
}

interface ExamsData {
  competitionName: string;
  bannerImage: string|File;
  subjects: string;
  courseList: string;
}

interface AnnoncesData {
  bannerImage: string|File;
  Title:string;
  description: string;
  usefulLinks: string;
  date: Timestamp;
   id:string;
}

type CollectionData = ResultsData | ExamsData | AnnoncesData;

const AdminPanel: React.FC = () => {

    const { user } = useAuthContext()
    const router = useRouter()

       React.useEffect(() => {
           if (user == null) router.push("/signin"); else console.log(user.email)
    }, [user])

  const [collection, setCollection] = useState<string>('results');
  const [documents, setDocuments] = useState< CollectionData[]>([]);
  const [formData, setFormData] = useState<CollectionData | {}>({});
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [edit, SetEdit] = useState<boolean>(false);

  const [collectionFields, setCollectionFields] = useState<string[]>([]);

  // Dummy data
  const dummyData: Document[] = [
    {
      id: '1',
      competitionName: 'Competition 1',
      candidatesCount: 100,
      admittedCount: 50,
      sessionYear: '2022',
      successRate: '50%',
      bannerImage: 'banner1.jpg',
    },
     {
      id: '2',
      competitionName: 'Competition 2',
      candidatesCount: 200,
      admittedCount: 20,
      sessionYear: '2022',
      successRate: '50%',
      bannerImage: 'banner2.jpg',
    }
    // Add more dummy data here...
  ];

  useEffect(() => {
    loadDocuments();
    if (collection === 'results') {
      setCollectionFields(['competitionName', 'candidatesCount', 'admittedCount', 'sessionYear', 'successRate', 'bannerImage']);
    } else if (collection === 'exams') {
      setCollectionFields(['competitionName', 'bannerImage', 'subjects', 'courseList']);
    } else if (collection === 'annonces') {
      setCollectionFields([ 'bannerImage','Title', 'description', 'usefulLink']);
    }
  }, [collection]);

  const loadDocuments =  async ():void => {
    // Simulate loading documents from dummy data
    // setDocuments(dummyData);
    const result= await getCollectionData(collection);
    console.log(result.data)


    const res :CollectionData[]=result.data
    setDocuments(res);
  };

  const handleCollectionChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCollection(e.target.value);
  };

  const handleEdit = (doc: CollectionData): void => {
    setFormData({ ...doc});
    setEditingDocId(doc.id);

  };

  const handleAdd = (): void => {
    SetEdit(true)
     setFormData({});
    setEditingDocId(null);
  };

  const handleFormChange = (field: string, value: string | number|File): void => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFormSubmit = (): void => {
    if (editingDocId === null) {
      // Simulate adding data to dummy data
      const newDoc: CollectionData = { ...formData,date: firebaseTimestamp,id:uuid()};    
      dummyData.push(newDoc);
      console.log(addData(collection, newDoc))
      console.log(newDoc)
    } else {
      // // Simulate updating data in dummy data
      // const index: number = dummyData.findIndex((doc) => doc.id === editingDocId);
      // if (index !== -1) {
      //   dummyData[index] = formData;
      updateData(editingDocId, collection, formData);
      loadDocuments();
      
    }
     setFormData({});
    setEditingDocId(null);
     loadDocuments();
  };

// ...

const handleDelete = async (docId: string) => {
  try {
      deleteData(docId,collection);
      loadDocuments();
   
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};



  return (
    <div className='text-white mt-[100px] pl-4 pr-4  '>
      <div className='w-full h-full border flex rounded border-red-500 p-4 flex-col items-center '>
          <h4 className='w-[50%] items-center  h-[100%] text-center border-green-800 m-5  text-green-500 border rounded text-green'>Connexion reussi</h4>
          <h3 className="h1 mb-4 text-red-500" data-aos="fade-up">Interface d'Administration</h3>
        <h3 className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Bienvenue <span className='text-3xl text-white font-bold'>Marc Aurel</span>. email : {user ? user.email : ''}</h3>
      </div>
      <select className='text-red-500 mt-4 mb-5 ml-5' value={collection} onChange={handleCollectionChange}>
        <option value="results">Résultats</option>
        {/* <option value="exams">Examens</option> */}
        <option value="annonces">Annonces</option>
      </select>
      
      <table className="p-5 md:w-full w-[10%] text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 overflow-scroll">
          <tr className='overflow-scroll'>
            <th scope="col" className="md:px-6 px-2 py-1 md:py-3 ">Actions</th>
            {collectionFields.map((field) => (
              <th scope="col" className="md:px-6 px-2 py-1 md:py-3" key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr className="bg-gray- overflow-scroll border-b dark:bg-gray-900 dark:border-gray-700" key={doc.id}>
              <td className="px-6 py-4 ">
                <button className=' text-orange-500 rounded mr-3' onClick={() => {
                  SetEdit(true)
                  handleEdit(doc)
                }}>Modifier</button>
                <button className='  text-red-500 rounded mr-3' onClick={() => handleDelete(doc.id)}>Supprimer</button>
              </td>
              {collectionFields.map((field) => (
                <td className='md:px-6 px-2 py-1 md:py-3' key={field}>{field=='bannerImage'?<Image src={doc[field]}  width={20} height={20} alt='image'/>:doc[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {edit && (
        <div>
          <h3 className='text-orange-500  w-[40%] items-center justify-center flex h-[40px] bg-red-100 mt-8 font-bold text-center'>{editingDocId === null ? 'Ajouter' : 'Modifier'} le Document</h3>
          {collectionFields.map((field) => (
            <div className='text-gray-500 ml-10 flex flex-col flex-start' key={field}>
              <div>
                <label className='mr-[40px]' htmlFor={field}>{field}</label>
              </div>
              <div>
              {field === 'bannerImage' ? (
                  <input
                    className=''
                  type="file"
                  accept="image/*"
                   onChange={(e) => handleFormChange(field, e.target.files?.[0] || '')}
                />
              ) : (
                <input
                  type="text"
                  id={field}
                  value={formData[field] || ''}
                  onChange={(e) => handleFormChange(field, e.target.value)}
                />
                )}
                </div>
            </div>
          ))}
          <button className='btn bg-gray-700 p-2 mb-3 mt-4 ml-[10%]' onClick={handleFormSubmit}>Enregistrer</button>
        </div>
      )}

      <button className='btn bg-white text-black mt-5 mb-5' onClick={handleAdd}>Ajouter</button>
    </div>
  );
};

export default AdminPanel;
