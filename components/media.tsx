'use client'
import Issea from '@/public/images/ecoles/issea.png'
import Eamau from '@/public/images/ecoles/eamau.png'
import Eamac from '@/public/images/ecoles/eamac.jpeg'
import Ifford from '@/public/images/ecoles/ifford.png'
import Ista from '@/public/images/ecoles/ista.png'
import Essal from '@/public/images/ecoles/essal.png'
import Cerdi from '@/public/images/ecoles/cerdi.png'
import Ief from '@/public/images/ecoles/ief.png'
import Iia from '@/public/images/ecoles/iia.png'
import DocViewer,{DocViewerRenderers} from '@cyntler/react-doc-viewer'
import { File } from 'buffer'
import { Timestamp } from 'firebase/firestore';
import getCollectionData from '@/components/firestore/getData';
import { useState,useEffect } from 'react'
import Image from 'next/image'

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


import Link from 'next/link'
export default function Media() {
  const [documents, setDocuments] = useState<CollectionData[]>([]);
  
  useEffect(() => {
    loadDocuments();
     console.log("doc",documents)
  }, [])

  const loadDocuments =  async ():void => {
    // Simulate loading documents from dummy data
    // setDocuments(dummyData);
    const result= await getCollectionData('media');
    console.log(result.data)


    const res :CollectionData[]=result.data
    setDocuments(res);  
  };
    // const convert = (url):File => {
        
    //     fetch(url)
    //         .then(response => response.blob())
    //         .then(blob => {
    //             // Convert the Blob to a File object
    //             const file = new File([blob as any], 'file-name.bin', { type: 'application/octet-stream' });
    //             return file  
    //         })
    // }
  
  return (
    <section className='w-full bg-white'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-w  ">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className='p-2 gap-3 mb-3 bg-red-100 w-full justify-center items-baseline flex'><span className='p-3 bg-yellow-400'>Notice</span> : Tous les fichiers seront nommés de la même manière lors du téléchargement (bannerImage). Veuillez les renommer après le téléchargement pour éviter toute confusion.</div>

          <div className="max-w-sm mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {documents.map((collection) => {
              return (
                <div className="block rounded-lg bg-red-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                    className="rounded-t-lg"
                    src={"https://previews.123rf.com/images/dazdraperma/dazdraperma1206/dazdraperma120600001/14029418-illustration-de-coffre-au-tr%C3%A9sor-rempli-d-or.jpg"}
                    alt=""
                    />  
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-bold text-center leading-tight text-white dark:text-neutral-50">
                    {collection.Title}
                    </h5>
                    {/* <p className='text-gray-600 text-[9px]'>{collection.date}</p> */}
                    <p className='text-[11px] text-white'>{collection.description}</p>
                    <button
                    type="button"
                    className="inline-block bg-slate-50 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] replace"
                    data-te-ripple-init
                      data-te-ripple-color="light"
                      // href={collection.bannerImage}
                    >
                    <a href={collection.bannerImage}>Telecharger</a>
                    </button>
                </div>
                </div>

              )
            })}

        
          </div>

        </div>
      </div>
    </section>
  )
}
