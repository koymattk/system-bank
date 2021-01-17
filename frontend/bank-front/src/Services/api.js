import axios from 'axios';

export const fetchUserProfiles = () => {
    return  axios.get("http://localhost:8080/clients");
}

export const validate = async (login,password,cPassword,cpf,rg, tell, email) => {
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


export const validateLogin = async (login, password) => {
   if(login === '' || password === ''){
        console.log('dados vazios')
        return null;
   } 
   const dados = (await axios.get(`http://localhost:8080/clients/authentication/${login}/${password}`)).data
   return dados; 
}

export const validateId = (id) =>{
    if(id === null)
        return false;
    else
        return true;
}