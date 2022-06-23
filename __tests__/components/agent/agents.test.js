
import AgentsPresenter  from '../../../components/agent/agents.presenter';
import httpGateway from '../../../shared/http-gateway';

it('should hit backend API and load 3 view model agents when loaded from backend', async () => {

    httpGateway.get = jest.fn().mockImplementation(() => {
        return [{
            id:1,
            fullName: 'Abdel',
        },{
            id:2,
            fullName: 'Rafi'
        },{
            id:3,
            fullName: 'Bilal'
        }];
    });

    let viewModel = null;
    let agentsPresenter = new AgentsPresenter();
    await agentsPresenter.load((generatedViewModel) => {
        viewModel = generatedViewModel;
    })
    
    expect(httpGateway.get).toHaveBeenCalledWith("http://production/users/role");
    expect(viewModel.length).toBe(3);
    expect(viewModel[0].name).toBe('Abdel')
})