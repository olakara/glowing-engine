import { useState, useEffect } from 'react';
import AgentsPresenter from '../agents.presenter'
import AgentRowComponent from './agent-row.component';

export default function AgentListComponent(props) {

    const agentsPresenter = new AgentsPresenter();
    const [vm, copyViewModelToStateModel] = useState([]);

    useEffect(()=>{
        async function load() {
            await agentsPresenter.load(generatedViewModel => {
                copyViewModelToStateModel(generatedViewModel);
            })
        }
        load();
    },[])

 return (
    <>
        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                    </th>
                    <th scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Email
                    </th>
                    <th scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">State
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">

                    {vm && vm.map((agentVm,index) => {
                    return  <AgentRowComponent key={index} vm={agentVm} index={index}  />   
                    })}
                
                </tbody>
            </table>
        </div>
     </>
     
  )
}