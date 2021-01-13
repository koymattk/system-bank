import axios from 'axios';

export const fetchUserProfiles = () => {
    return axios.get("http://localhost:8080/clients");
}