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
        display: flex;
        width: 200px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`