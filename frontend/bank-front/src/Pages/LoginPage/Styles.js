import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20%;
    
`

export const Text = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2px;
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
export const Links = styled.div`
    margin: 5px;
    padding: 5px;
    width: 200px;
    border: 0.5px solid black;
    border-radius: 10px;
    font-size: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #273c75;

    span {
        color: #f5f6fa;
        font-weight: bold;
    }

`