"use client"

import Issea from '@/public/images/ecoles/issea.png'
import stat1 from '@/public/images/stat/stat 1.jpg'
import stat2 from '@/public/images/stat/stat 2.jpg'
import stat3 from '@/public/images/stat/stat 3.jpg'
import stat4 from '@/public/images/stat/stat 4.jpg'
import Essal from '@/public/images/ecoles/essal.png'
import Cerdi from '@/public/images/ecoles/cerdi.png'
import Ief from '@/public/images/ecoles/ief.png'
import Iia from '@/public/images/ecoles/iia.png'
import Image from 'next/image'
import React from 'react';

import { Timestamp } from 'firebase/firestore';
import getCollectionData from '@/components/firestore/getData';
import { useState,useEffect } from 'react'

const Images =[{
  id: 1,
  src: stat1,
  alt: 'string'
},
  {
  id: 2,
  src: stat2,
  alt: 'string'
  }
  ,
  {
  id: 3,
  src: stat3,
  alt: 'string'
  },
  {
  id: 4,
  src: stat4,
  alt: 'string'
  }]

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


interface ResultCardProps {
  competitionName: string;
  candidatesCount: number;
  admittedCount: number;
  sessionYear: number;
  successRate: number;
  publicationDate: string;
  bannerImage: typeof Issea;
}

const ResultCard: React.FC<ResultCardProps> = ({
  competitionName,
  candidatesCount,
  admittedCount,
  sessionYear,
  successRate,
  publicationDate,
  bannerImage,
}) => {
  return (
    <div className="bg-white rounded-lg  border border-red-500 shadow-md p-6 md:p-8 lg:p-10" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      <Image src={bannerImage} width={200} height={200} alt={competitionName} className="w-full h-auto mb-4 md:mb-6 lg:mb-8 rounded-lg" />
      <h2 className="text-xl font-semibold mb-2">{competitionName}</h2>
      <p className="mb-2">
        Candidates: {candidatesCount} | Admitted: {admittedCount}
      </p>
      <p className="mb-2">Session Year: {sessionYear}</p>
      <p className="mb-2 text-red-500 font-bold">Success Rate: {successRate}</p>
      {/* <p className="mb-2 text-gray-400">Publication Date: {publicationDate.toString()}</p> */}
    </div>
  );
};

export const Card = ResultCard;



export default function StatGrid() {
    const [documents, setDocuments] = useState<CollectionData[]>([]);
  
  useEffect(() => {
    loadDocuments();
     console.log("doc",documents)
  }, [])

 const loadDocuments = async () => {
   try {
    const result = await getCollectionData('results');
    const res = result.data
    console.log(res)
    setDocuments(res);
   
  } catch (error) {
    console.error('Error loading documents:', error);
  }
};
  return (
    <section className='w-full bg-white'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-w  ">
        <div className="py-12 md:py-20">

          {/*Section header*/}
          <div className="max-w-3xl border-t mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Retrouvez ici nos statistiques des sessions de concours passees</h2>
            <p className="text-xl text-gray-400">Statos-Sphere : Numero 1 des concours de Bourse au Cameroun</p>
          </div> 
            <div className="max-w-sm mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">

              {Images.map((image) => (
                  <div
                    key={image.id}
                    className="cursor-pointer border border-3  "
                        // onClick={() => openImage(image)} 
                        data-aos="fade-up" 
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                    />
                  </div>
                ))}
          </div>
          {/* image here */}
          {/* Items */}
          <div className="max-w-3xl mt-5 border-t mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Autres Statistiques</h2>
            {/* <p className="text-xl text-gray-400">Statos-Sphere : Numero 1 des concours de Bourse au Cameroun</p> */}
          </div> 
          <div className="max-w-sm mx-auto grid gap-3  md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            
            {documents.map((collection) => {
              return (
                <Card
                  key={collection.id}
                  competitionName={collection.competitionName}
                  candidatesCount={collection.candidatesCount}
                  admittedCount={collection.admittedCount}
                  sessionYear={collection.sessionYear}
                  successRate={collection.successRate}
                  publicationDate={collection.date}
                  bannerImage={collection.bannerImage}
                />
              )
            })}

            {/* 1st item
            <Card competitionName={'CONCOURS ISSEA'}
            candidatesCount = {1000}
            admittedCount = {500}
            sessionYear ={2023} 
            successRate={75}
            publicationDate={'10 - 12 - 2023'}
              bannerImage={Issea} />
            
            <Card competitionName={'CONCOURS EAMAU'}
            candidatesCount = {1000}
            admittedCount = {500}
            sessionYear ={2022}
            successRate={75}
            publicationDate={'10 - 12 - 2023'}
            bannerImage={Eamau}/>

            <Card competitionName={'CONCOURS EAMAC'}
            candidatesCount = {1000}
            admittedCount = {500}
            sessionYear ={2023}
            successRate={75}
            publicationDate={'10 - 12 - 2023'}
            bannerImage={Eamac}/> */}
          </div>

        </div>
      </div>
    </section>
  )
}
