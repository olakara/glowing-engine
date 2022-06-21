import { config } from '../../shared/constants';
import httpGateway from "../../shared/http-gateway";
import Observable from "../../shared/observable";

class UserRepository {
    userPm = null;
    
    constructor() {
        this.userPm = new Observable({});
    }

    getCurrentUser = async (callback) => {
        this.userPm.subscribe(callback);
        const userDto = await httpGateway.get(config.BASE_URL + config.USER_INFO);
        this.userPm.value = userDto;
        this.userPm.notify();
    }

    signIn = async (signInDto) => {

        const accessDto = await httpGateway.post(config.BASE_URL + config.SIGN_IN, signInDto);
        if(accessDto.accessToken) {
            localStorage.setItem("token", accessDto.accessToken);
            return true;
        } else {
            return false;
        }
    }

    signOut = async () => {
        localStorage.clear();
    }

    isLoggedIn = async () => {
        const token = localStorage.getItem("token");
        if(token) {
            return true;
        } else 
            return false;
    }

}

const userRepository = new UserRepository();
export default userRepository;