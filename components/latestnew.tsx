"use client"
import Issea from '@/public/images/ecoles/issea.png'
import Eamau from '@/public/images/ecoles/eamau.png'
import Eamac from '@/public/images/ecoles/eamac.jpeg'
import Ifford from '@/public/images/ecoles/ifford.png'
import Ista from '@/public/images/ecoles/ista.png'
import Essal from '@/public/images/ecoles/essal.png'
import Cerdi from '@/public/images/ecoles/cerdi.png'
import Ief from '@/public/images/ecoles/ief.png'
import Iia from '@/public/images/ecoles/iia.png'

import { Timestamp } from 'firebase/firestore';
import getCollectionData from '@/components/firestore/getData';
import { useState,useEffect } from 'react'


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



import Image from 'next/image'
export default function Latest() {

   const [documents, setDocuments] = useState<CollectionData[]>([]);
  
  useEffect(() => {
    loadDocuments();
     console.log("doc",documents)
  }, [])

 const loadDocuments = async () => {
   try {
    const result = await getCollectionData('annonces');
    const res = result.data.map((doc) => ({
      ...doc,
      date: doc.date.toDate ? doc.date.toDate() : new Date(doc.date), // Convert to JavaScript Date if it's a Timestamp
    }));
    // Sort the array by the "date" field in descending order (most recent first)
    res.sort((a, b) => b.date - a.date);
    // setDocuments(res);
 
    // Set the sorted data in the state
    console.log(res)
    setDocuments(res.slice(0,3));
   
  } catch (error) {
    console.error('Error loading documents:', error);
  }
};  

  return (
    <section className='w-full bg-white'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-w  ">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl border-t mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Annonces Recentes</h2>
            <p className="text-xl text-gray-400">Statos-Sphere News</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-3 lg:gap-16  md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

         {documents.map((collection) => {
              return (
              <div className="max-w-fit  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <a href="#">
                  <Image src={collection.bannerImage} width={500} height={500} alt='issea' />  
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{collection.Title}</h5>
                    </a>
                    <p className='text-gray-500 text-[10px]'>{collection.date.toString()}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{collection.description}</p>
                  <a href={collection.usefulLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more  
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
            </div>
            </div>)
            })}
            
            
            
        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <a href="#">
                <Image src={Issea} width={500} height={500} alt='issea' />  
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1er Concours Blanc Issea</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Le train est deja en marche , nous lancons le tour premier concours blanc de cette nouvelles session 2023</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div> */}




           {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <a href="#">
                                <Image src={Issea} width={500} height={500} alt='issea' />  
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1er Concours Blanc Issea</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Le train est deja en marche , nous lancons le tour premier concours blanc de cette nouvelles session 2023</p>
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
