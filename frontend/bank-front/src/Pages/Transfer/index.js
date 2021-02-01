import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { transfer } from '../../Services/api';
import * as S from './style'

export default function Tranfer() {
    const {id, index, bank} = useParams();
    const[keyTrans, setKeyTrans] = useState('');
    const[bankk, setBank] = useState('');
    const[agency, setAgency] =useState('');
    const[numberAccount, setNumberAccount] = useState('');
    const[cpf, setCpf] = useState('');
    const[value, setValue] = useState(0);
    const[typeAccount, setTypeAccount] = useState('corrente');
    return (
        <S.Container>
            <S.div>
            <form>
            <S.div>
            <span>SENHA DE TRANSFERENCIA</span>
            <input type="password" value={keyTrans} onChange={key => setKeyTrans(key.target.value)}/>
            </S.div>
            <S.div>
            <span>BANCO</span>
            <input type="text" value={bankk} onChange={bank => setBank(bank.target.value)}/>
            </S.div>
            <S.div>
            <span>AGENCIA</span>
            <input type="text" value={agency} onChange={agency => setAgency(agency.target.value)}/>
            </S.div>
            <S.div>
            <span>NUMERO DA CONTA</span>
            <input type="text" value={numberAccount} onChange={number => setNumberAccount(number.target.value)}/>
            </S.div>
            <S.div>
            <span>CPF</span>
            <input type="text" value={cpf} onChange={cpf => setCpf(cpf.target.value)}/>
            </S.div>
            <select value={typeAccount} onChange={value => setTypeAccount((value.target.value))}>
                    <option value={'corrente'}>CONTA CORRENTE</option>
                    <option value={'poupanca'}>POUPANÇA</option>
                    <option value={'salario'}>CONTA SALARIO</option>
            </select>
            <S.div>
            <span>VALOR QUE DESEJA TRANFERIR</span>
            </S.div>
            <input type="number" placeholder="R$" value={value} onChange={value => setValue(value.target.value)} />
            <button  type="button" onClick={()=>{
                transfer({
                    agency,
                    numberAccount,
                    cpf,
                    value,
                    typeAccount,
                    index,
                    clientId:id,
                    bank:bankk
                }).then(res=>{
                    if(res.data !== 0){
                        alert("Transferencia feita com sucesso");
                    }else{
                        alert("Tranferencia não concluida");
                    }
                });
            }}>TRANSFERIR</button>
            <Link to={`/homepage/${id}/${bank}`}>VOLTAR</Link>
        </form>
        </S.div>
            
        </S.Container>
        
        
    );
}