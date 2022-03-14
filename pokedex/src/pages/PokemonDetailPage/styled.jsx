import styled from "styled-components";
import Typography from '@mui/material/Typography';
export const CardContainer = styled.div`
    min-width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px;
`
// export const ContainerHeader = styled(Typography)`
//     display: flex;
//     justify-content: space-between;
//     background-color: blue;
// `
export const CardTitle = styled(Typography)`
    text-align: center;

`

export const CardType = styled.div`
    display: flex;
    font-size: 12px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    opacity: 0.7;
    color: black;
    border-radius: 10px;
    padding: 2px 10px;
`
export const CardPokemon = styled.div`
    /* display: flex;
    max-width: 350px;
    justify-content: center;
    align-items: center; */   
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    background-color: #6B727A;
    color: #FFFFFF;
    padding: 0 5px;
    cursor: pointer;
    border-radius: 30px;
    min-height: 70px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
export const CardPower = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-right: 300px;
`