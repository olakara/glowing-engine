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
                    fullName: agentPm.fullName,
                }
            });
            callback(agentsVm);
        });
    }

    createAgent = async (agentDto) => {

       let agentPm = {
        fullName: agentDto.fullName,
        email: agentDto.email,
        mobileNumber: agentDto.mobile,
        alternativeContactNumber: agentDto.alternateMobile,
        designation: agentDto.designation,
        role: agentDto.role,
        cascadeId: agentDto.location
      };
      let result = await agentsRepository.createAgent(agentPm);
      return result;
    }

    
}
