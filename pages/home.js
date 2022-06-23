import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import UserPresenter from '../components/user/user.presenter'
import CounterWidget from '../components/dashboard/counter-widget'
//import UserList from '../components/user/user-list/user-list.component'
import AgentListComponent from '../components/agent/agent-list/agent-list.component'
import LookupsPresenter from '../shared/lookups/lookups.presenter'

export default function Home() {
  
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [stateViewModel, copyViewModelToStateViewModel] = useState(null);
  const [generalLookups, copyGeneralLookupsToStateViewModel] = useState(null);
  const [userLookups, copyUserLookupsToStateViewModel] = useState(null);
  const vm = {
    title: 'Counter',
    countValue: '24,600',
  };

  let userPresenter = new UserPresenter();
  let lookupsPresenter = new LookupsPresenter();
  
   let handleGetUser = async () => {
    await userPresenter.getUser(viewModel => {
        copyViewModelToStateViewModel(viewModel)
    });
   }

  useEffect(() =>{

     async function load() {
            await lookupsPresenter.loadGeneralLookups(generatedViewModel => {
                copyGeneralLookupsToStateViewModel(generatedViewModel);
            })

            await lookupsPresenter.loadUserLookups(generatedViewModel => {
                copyUserLookupsToStateViewModel(generatedViewModel);
            })

        }
    load();

    const token = localStorage.getItem('token')
    if(token) {
       setLoginStatus(true)
    } else {
       Router.push("/login")
    }
  },[])

 return (<>
      <Head> 
        <title >Home Page</title>
      </Head>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="block lg:hidden h-8 w-auto" src="./images/Logo.jpg" alt="Logo"/>
                <img className="hidden lg:block h-8 w-auto" src="./images/Logo.jpg" alt="Logo"/>
              </div>
            </div>
            <div className="mt-5 ">
              {isLoggedIn && (<Link href="/logout">
                <a className="block px-3 py-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                </a>
             </Link>)} 
            </div>
          </div>
       </div>
    </nav>


      
      <h1 data-testid="pageheader" className="p-4 text-3xl font-bold underline">
        {isLoggedIn ? 'You are logged in' : 'You are not logged in'}
      </h1>
      {isLoggedIn}
      <nav className="py-4 px-6 text-sm font-medium">
        <ul className="flex space-x-3">
          <li>
           {!isLoggedIn && (<Link href="/login">
                <a className="block px-3 py-2 rounded-md bg-sky-500 text-white"> Login
                </a>
            </Link>)
           }     
          </li>
          <li>
              {isLoggedIn && (
                <button onClick={handleGetUser} className="block px-3 py-2 rounded-md bg-sky-500 text-white"> User Details
                </button>
             )}
          </li>
          <li>
              {isLoggedIn && (<Link href="/logout">
                <a className="block px-3 py-2 rounded-md bg-sky-500 text-white"> Logout
                </a>
             </Link>)}
          </li>

        </ul>
       </nav>
       <dl className="px-2 mt-5 grid grid-cols-2 gap-5 sm:grid-cols-6">
        <CounterWidget vm={vm} color="red" />
        <CounterWidget vm={vm} color="orange" />
        <CounterWidget vm={vm} color="blue" />
       </dl>
      
      User details: 
      { JSON.stringify(stateViewModel,null,2) }
       
       <AgentListComponent></AgentListComponent>
       <hr/>

    </>
  )
}