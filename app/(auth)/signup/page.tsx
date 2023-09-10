

'use client'
import React from "react";
import Link from 'next/link' 
import signUp from '@/components/signUp';
import { useRouter } from 'next/navigation'
  
export default function SignUp() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  const router = useRouter()
  
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    const { result, error } = await signUp(email, password);

    if (error) {
      console.error(error);
      console.log({email,password})
      return;
    }

    // Successful sign-up
    console.log(result);
    router.push('/admin');
  };
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 text-white">Welcome New Admin</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
            
            </form>
          
            <form  onSubmit={handleForm}>
             
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email"> Email <span className="text-red-600">*</span></label>
                  <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password" onChange={(e) => setPassword(e.target.value)} type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
              </div> 
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-red-500 hover:bg-gray-700 w-full" type="submit">Sign up</button>
                </div>
              </div>
            </form>
          
          </div>

        </div>
      </div>
    </section>
  )
}
