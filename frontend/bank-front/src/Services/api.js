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
        alert("AS SENHAS PRECISAM SER IGUAIS");
        return false;  
    }
}

export const postClient = (client) => {
    return axios.post("http://localhost:8080/clients", client);
}

export const createAccount = (clientId, account) => {
    return axios.put(`http://localhost:8080/clients/${clientId}`, account);
}

export const getClient = async (id) => {
    const client = (await axios.get(`http://localhost:8080/clients/${id}`)).data
    return client;
}


export const validateLogin = async (login, password) => {
   if(login === '' || password === ''){
        console.log('dados vazios')
        return null;
   } 
   const loginPassord = {login,password}
   const dados = await (await axios.post('http://localhost:8080/clients/login',loginPassord)).data;
   return dados;
     
}

export const validateId = (id) =>{
    if(id === null)
        return false;
    else
        return true;
}

export const createPix = () => {
    return axios.get('http://localhost:8080/account/createpix');
}

export const registerKeyPix = (clientId, index, keypix) => {
    return axios.put(`http://localhost:8080/account/${clientId}/${index}`, keypix);
}

export const agency = () =>{
    const agencys = ['0001','0002','0003'];
    return agencys[Math.floor(Math.random() * 3)];
}

export const getClientPix = async (keyPix) => {
    
    return axios.get(`http://localhost:8080/account/${keyPix}`);
}
export const transferPix = async(clientId, index, keyPix, value) => {
    
    console.log(index);
    return axios.put(`http://localhost:8080/account/transferpix/${clientId}/${index}/${keyPix}/${value}`);
}
export const transfer = async (clientId, index, account) =>{
    console.log(clientId,index)
    console.log(account);
    return axios.put(`http://localhost:8080/account/transfer/${clientId}/${index}`,account);
}
export const getExtrato = async (id,index) => {
    return axios.get(`http://localhost:8080/account/extrato/${id}/${index}`);
}
export const sacar = async (saque) =>{
    return axios.put("http://localhost:8080/account/sacar", saque);
}