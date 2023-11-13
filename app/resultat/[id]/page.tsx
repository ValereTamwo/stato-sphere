"use client"
import React, { useEffect } from "react"
import { useParams } from "next/navigation";
import { collection, getDocs, query, where,getFirestore } from "firebase/firestore";
import firebase_app from "@/components/firebaseConfig";
const db = getFirestore(firebase_app);
import { useState } from "react";
import { Parser } from "json2csv";

export default function result() {

    const id = useParams();
    const [fields, setFields] = useState([]);
    const [data, setData] = useState([]);
    const [csvs, setCsv] = useState([]);

    const loadDocuments = async (id) => {
    try {
      const q = query(collection(db, 'resultatform'), where('id_form', '==', id));
      const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => doc.data());
        const fieldt:any = [];
      setCsv(data);
      data.forEach((item) => {
        for (const key in item) {
          if (!fieldt.includes(key)) {
            fieldt.push(key);
          }
        }
      }
      );
        setFields(fieldt)
    } catch (error) {
      console.error('Error downloading CSV', error);
    }
      }
    const download = () => {
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
    }

    useEffect(() => {
        loadDocuments(id.id)
    },[id.id])
    return (
        <div className="mt-[150px] m-[50px]">
            <div className="flex gap-9 mb-[20px] justify-around">
                <h3 className="text-[30px] mt-5 text-white">Resultat - form ID : {id.id}</h3>
                <button onClick={() => { download() }} className="mt-3 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span >Telecharger </span>
                </button>
            </div>
         <table className="p-5 md:w-full w-[10%] text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 overflow-scroll">
          <tr className='overflow-scroll'>
            <th>Numero</th>
            {fields.map((field) => (
              <th scope="col" className="md:px-6 px-2 py-1 md:py-3" key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvs.map((doc,index) => (
              <tr className="bg-gray- overflow-scroll border-b dark:bg-gray-900 dark:border-gray-700" key={doc.id}>
                  <td className='md:px-6 px-2 py-1 md:py-3'>{index}</td>
                  {fields.map((field) => (
                
                <td className='md:px-6 px-2 py-1 md:py-3' key={field}>{field=='bannerImage'?<Image src={doc[field]}  width={20} height={20} alt='image'/>:doc[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
            </table>
            </div>
    )
}