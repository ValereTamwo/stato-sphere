import Link from 'next/link'

'use client'
import React from "react";
import { useRouter } from 'next/navigation'
import signIn from '@/components/signin';



export default function SignIn() {


    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
  const router = useRouter()
  
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    const { result, error } = await signIn(email, password);

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
            <h1 className="h1 text-white">Welcome back Marc Aurel</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
             
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form onSubmit={handleForm}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" onChange={(e) => setEmail(e.target.value)} type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input  onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  {/* <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">Keep me signed in</span>
                    </label>
                    <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-red-500 hover:bg-gray-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            
          </div>

        </div>
      </div>
    </section>
  )
}
