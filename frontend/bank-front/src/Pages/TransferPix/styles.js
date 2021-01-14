import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid;
`

export const Inputs = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    
    input {
        padding: 5px;
        margin: 5px;
        width: 200px;
    }
`
export const Buttons = styled.div`
    margin: 10px;
    flex-direction: row;

    button{
        margin: 10px;
    }
`