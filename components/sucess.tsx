"use client"
import React from 'react'
import { useState,useEffect } from 'react'
 
function Success(){
  return (
    <div className="flex justify-center align-items-center  flex-wrap w-[100%]  h-[100]   mb-4 mt-[60px]">
          <div className='col-6 bg-black md:ml-[100px]'>
               <div  className="flex justify-center align-items-center mt-[5%] w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full">
                      {/* Modal content */}
                      <h3 className="mb-4 text-3xl font-bold  text-white dark:text-white">Formulaire StatosSphere</h3>
                <h5 className='text-[13px] mb-3 border-b-4 p-4 text-green-500'>
                    Donnees Enregistree avec Success
                </h5>
            
        </div>
        </div>
          </div>
    </div>
  )
}

export default Success