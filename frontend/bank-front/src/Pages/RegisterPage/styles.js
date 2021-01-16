import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    width: 720px;
    margin: 0 auto;

    input {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    width: 200px;
    }

    select{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 200px;
    }
    
    button{
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