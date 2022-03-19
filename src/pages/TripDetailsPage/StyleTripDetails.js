import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerTripDetails = styled.div`
    display: flex;
    flex-direction: column;
    .loading{
        align-self: center;
    }
`
export const Title = styled.div`
    border-bottom: 1px solid white;
    margin: 30px 10%;
    padding-bottom: 20px;
`
export const Area1 = styled.div`
    display: flex;
    margin: 0px 10%;
    justify-content: space-between;
`
export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`
export const ApprovedArea = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    color: ${mainColors.secundario};
    width: 40%;
    border-radius: 5px;
    padding: 5px;
    ol{
        list-style-position: inside;
    }
`
export const Area2 = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${mainColors.fundo};
    padding: 0 10%;
    margin-top: 50px;
    div{
        display: flex;
        flex-wrap: wrap;
        align-self: center;
    }
`