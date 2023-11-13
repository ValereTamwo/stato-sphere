"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import FieldAdder from './FieldAdder';
import { useParams } from 'next/navigation';
import uuid from 'react-uuid';

import firebase_app from './firebaseConfig';
import { getFirestore, doc, setDoc, addDoc, collection, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadString,uploadBytes ,getDownloadURL} from "firebase/storage";
import { Timestamp } from "firebase/firestore";
const db = getFirestore(firebase_app);
const storage = getStorage();
import { useAuthContext } from './context/AuthContext';
import { useRouter } from 'next/navigation';
function CreateForms() {

    const id = useParams();
   const { user } = useAuthContext()
    const router = useRouter()

 
  useEffect(() => {
    if (user == null) { router.push("/signin") } else {
        console.log(id)
    }
  }, [user,id])    
const InitForm = {
  uuid: uuid(),
  title: decodeURIComponent(id.title),
  description: decodeURIComponent(id.desc),
  fields: [],
};

const [form, setForm] = useState(InitForm);

const onAddField = (newField) => {
  // Copiez l'état actuel de la structure de formulaire
  const updatedFormStructure = { ...form };

  // Ajoutez le nouveau champ au tableau fields
  updatedFormStructure.fields.push(newField);

  // Mettez à jour l'état avec la nouvelle structure de formulaire
    setForm(updatedFormStructure);
    
};
const handleDeleteField = (index) => {
    const updatedFormStructure = { ...form };

  updatedFormStructure.fields.splice(index, 1);

    setForm(updatedFormStructure);
    }; 

    const SaveForm = async(form:any) => { 
    try {
     const collectionRef = collection(db, 'formulaire');
        const result = await addDoc(collectionRef, form)
        window.location.href = "/forms"; 
        // We're initializing bannerImage as an empty string, will be replaced with the storage URL
        console.log(result)
        }
    catch (e: any) {
    console.log(e.message)
  }}

  return (
    <div className="flex   flex-wrap w-[100%]  h-[100]  mx-3 mb-4 mt-[60px]">
    <div className='col-3 md:ml-[50px]' >
        <div  className="flex justify-center align-items-center mt-[5%] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Ajouter des champs au formulaire</h3>
                <div className="space-y-6" >    
           
                <div>
             
                <FieldAdder onAddField={onAddField}/>
                </div>
        
                </div>
            </div>
            </div>
        </div>
              </div>
              
        </div>
          <div className='col-6 bg-black md:ml-[100px]'>
               <div  className="flex justify-center align-items-center mt-[5%] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-4xl font-bold  text-gray-900 dark:text-white">{form.title}</h3>
                <h5 className='text-[13px] mb-3 border-b-4 p-4'>
                    {form.description}
                </h5>
                {/* <form className="space-y-6" action="#"> */}
                    
                {form.fields.map((field, index) => (
                                                                                                                                                                                         <div key={index}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{field.label+"*"}</label>
                    {field.type === 'text' && (
                    <input className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" id={index} />
                    )}
                    {field.type === 'radio' && (
                    <div>
                        {field.options?.map((option, optionIndex) => (
                        <div key={optionIndex}>
                            <input className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="radio" id={index} name={index} value={option} />
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={option}>{option}</label>
                        </div>
                        ))}
                    </div>
                    )}
                    {field.type === 'select' && (
                    <select id={index} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        <option value="">Sélectionnez une option</option>
                        {field.options?.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    )}
                    {field.type === 'checkbox' && (
                    <div>
                        {field.options?.map((option, optionIndex) => (
                        <div key={optionIndex}>
                            <input className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="checkbox" id={optionIndex} name={index} value={option} />
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={optionIndex}>{option}</label>
                        </div>
                        ))}
                    </div>
                        )}
                    {field.type === 'date' && (
                    <input type="date" id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    )}
                    {field.type === 'time' && (
                    <input type="time" id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                    )}
                    {field.type === 'number' && (
                            <input type="number" id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        
                        )}
                    {field.type === 'textarea' && (
                        <textarea id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        )}
                        {field.type === 'email' && (
                        <input type="email" id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        )}
                        {field.type === 'tel' && (
                        <input type="tel" id={index} className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                        )}
                        <button className="w-full mt-3 text-white bg-red-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleDeleteField(index)}>Supprimer</button>
                </div>
                ))}

               
        
                <button
                    className="w-full text-white bg-black hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => SaveForm(form)}
                                  >
                    Enregistrer
                </button>
                
                {/* </form> */}
            </div>
            </div>
        </div>
        </div>
          </div>
    </div>
  )
}

export default CreateForms