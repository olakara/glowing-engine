import agentsRepository from './agents.repository'

export default class AgentsPresenter {
    load = async (callback) => {
        await agentsRepository.getAgents(agentsPm => {
            const agentsVm = agentsPm.map(agentPm => {                
                return {
                    cascadeId: agentPm.cascadeId,
                    email: agentPm.email,
                    id: agentPm.id,
                    isActive: agentPm.isActive,
                    mobileNumber: agentPm.mobileNumber,
                    name: agentPm.name,
                }
            });
            callback(agentsVm);
        });
    }

    createAgent = async (agent) => {
        await agentsRepository.createAgent(agent)
    }
}
