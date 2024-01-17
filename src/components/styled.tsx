import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
`

export const Title = styled.h1`
    font-size: 3rem;
    color: #587c8f;
`

export const Table = styled.table`
    border-collapse: collapse;
    margin: auto;
    padding: 2rem;
    font-size: 2rem;
    width: 100%;

    th{
        background-color: #6e9db7;
        border: 1px solid #ffffff;
        padding: 2rem;
        width: 15%
    }

    tr{
        border: 1px solid #ffffff;
        background-color: #9bafba;
        padding: 1rem;
    }

    td{
        padding: 1rem;
        border: 1px solid #ffffff;
    }
`