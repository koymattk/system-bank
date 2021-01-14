import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid;
`

export const Bank = styled.div`
    font-size: 40px; 
    margin-bottom: 20px;
`

export const NameClient = styled.div`
    font-size: 20px; 
    margin-bottom: 15px;
`

export const Saldo = styled.div`
    font-size: 15px; 
    border: 1px solid;
    border-radius: 3px;
    padding: 10px;
`
export const Buttons = styled.div`
    margin: 10px;
    flex-direction: row;

    button{
        margin: 10px;
    }
`