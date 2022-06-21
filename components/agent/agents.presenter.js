import agentsRepository from './agents.repository'

export default class AgentsPresenter {
    load = async callback => {
        agentsRepository.getAgents(agentsPm => {
            const agentsVm = agentsPm.map(agentPm => {
                return {
                    name: agentPm.fullName
                }
            });
            callback(agentsVm);
        })
    }
}