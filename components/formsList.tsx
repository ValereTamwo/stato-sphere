'use client'

import firebase_app from "./firebaseConfig";
import { Timestamp } from 'firebase/firestore';
import getCollectionData from '@/components/firestore/getData';
import { useState, useEffect } from 'react'
import { Parser } from "json2csv";
import Link from "next/link";
import { getDocs, collection, query, where,getFirestore } from 'firebase/firestore';
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

const db = getFirestore(firebase_app);

import Image from 'next/image'
import CreateForm from './Modal'
import FormGenerator from './FieldAdder'
import TextCopyDiv from './TextCopy'
import FieldAdder from './FieldAdder'
import css from "styled-jsx/css";
import AuthContextProvider from "./context/AuthContext";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function FormList() {
  const [modal, setModal] = useState<Boolean>(false)
  const [documents, setDocuments] = useState<CollectionData[]>([]);
  const [fields, setFields] = useState([]);
  const [data, setData] = useState([]);
   const { user } = useAuthContext()
  const router = useRouter()

 
  useEffect(() => {
    if (user == null) { router.push("/signin") } else {
      loadDocuments();
      console.log("doc", documents)
    }
  }, [user])

 const loadDocuments = async () => {
   try {
    const result = await getCollectionData('formulaire');
    const res = result.data
    console.log(res)
    setDocuments(res);
   
  } catch (error) {
    console.error('Error loading documents:', error);
  }
 };
   const [csvs, setCsv] = useState([]);
  
  const handleDownload = async (id) => {
    try {
      const q = query(collection(db, 'resultatform'), where('id_form', '==', id));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => doc.data());
      setCsv(data);
      data.forEach((item) => {
        for (const key in item) {
          if (!fields.includes(key)) {
            fields.push(key);
          }
        }
      });

      // Convert the data to CSV
      const json2csvParser = new Parser({ fields });

      const csv = json2csvParser.parse(csvs);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'resultat.csv';
      link.click();
      
      // return csv
      // console.log(fields)
      console.log(data);
      return csv
    } catch (error) {
      console.error('Error downloading CSV', error);
    }
  };
  
  return (
    <section className='w-full bg-gray-900'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-w  ">
        <div className="py-12 md:py-20">
          
          <button onClick={() => { setModal(true) }} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block mb-9 text-white  bg-red-700 hover:bg-white hover:text-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
               Creer un Formulaire
          </button>
         {modal&&<CreateForm modal={modal} setModal={setModal}/>}
            
          {/* Section header */}
           <div className="max-w-3xl border-t m-3">
            <p className="text-xl text-gray-400 mt-3">Tout les formulaires</p>
           
          </div> 

          {/* Items */}
          <div className="max-w-sm mx-auto  grid gap-3  md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {documents.map((collection) => {
              return (
             
                  <div className="block max-w-sm p-6 bg-black border border-gray-200 rounded-lg shadow hover:text-black hover:bg-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white  dark:text-black">{collection.title}
                  </h5>
                  <p className="font-normal  text-white dark:text-black">{collection.description}</p>
                  <br />
                  <div className=' gap-y-8'>
                    {/* <p className='text-[13px] text-white'>Monday 08 oct 2023 12h 22min 9s</p> */}
                    <TextCopyDiv text={collection.uuid}/>
                  </div>
                  <Link href={`/resultat/${collection.uuid}`} className=" mt-5  text-white bg-red-500 hover:bg-white hover:text-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-black dark:focus:ring-red-800">
                    Voir Resultat
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
                  </div>
)
            })}
            {/* 1st item
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <a href="#">
                <Image src={Issea} width={500} height={500} alt='issea' />  
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
            
            
            
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <a href="#">
                <Image src={Issea} width={500} height={500} alt='issea' />  
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>




           <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <a href="#">
                                <Image src={Issea} width={500} height={500} alt='issea' />  
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div> */}

            

          </div>

        </div>
      </div>
      
    </section>
  )
}
