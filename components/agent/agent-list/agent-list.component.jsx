import { useState, useEffect } from 'react';
import AgentsPresenter from '../agents.presenter'

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
     <div>
        Agent List
       {vm.map((agentVm,i) => {
        return <div key={i}>{JSON.stringify(agentVm, null, 2)}</div>
       })}
     </div>    
  )
}