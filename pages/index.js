import {  useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Router from "next/router"

export default function Home({data}) {


  useEffect(() =>{
    const token = localStorage.getItem('token');
    console.log('token', token)
    if(token) {
       Router.push("/home");
    } else {
      Router.push("/login");
    }
   
  },[])

 return (<>
      <Head> 
        <title >Index Page</title>
      </Head>
    
      <nav className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
          <li>
            <Link href="/login" className="block px-3 py-2 rounded-md bg-sky-500 text-white">Login</Link>
            <Link href="/logout" className="block px-3 py-2 rounded-md bg-sky-500 text-white">Logout</Link>
          </li>
        </ul>
       </nav>

    
    </>
  )
}


