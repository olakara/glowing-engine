import agentsRepository from './agents.repository'

export default class AgentsPresenter {
    load = async (callback) => {
        await agentsRepository.getAgents(agentsPm => {
            const agentsVm = agentsPm.map(agentPm => {
                return {
                    name: agentPm.fullName
                }
            });
            callback(agentsVm);
        });
    }
}