import axios from 'axios';

export const fetchUserProfiles = () => {
    return  axios.get("http://localhost:8080/clients");
}

export const validate = (login,password,cPassword,cpf,rg, tell, email) => {
    if (login === '' || password === ''|| cPassword === '' || cpf === '' || rg === ''||tell === ''|| email ===''){
        alert('PREENCHA OS CAMPOS DE MANEIRA CORRETA');
        return false;
    }else{
        if (password === cPassword){
            return true;
        }
        alert("AS SENHAS PRECISAM SER IGUAIS")
        return false;  
    }
}

export const postClient = (client) => {
    return axios.post("http://localhost:8080/clients", client);
}

export const attClient = () => {
    return axios.put()
}

export const validateLogin = (clients, login, password) => {
    const id = clients.filter(client => {
        return (client.login === login && client.password === password);
    })
    if(id[0] === undefined){
        return [false]
    }
    return [true, id[0].id]
}

