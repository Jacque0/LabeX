import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerAdminHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const TripsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${mainColors.fundo};
    justify-content: center;
    img{
        border-radius: 50%;
    }
`

export const ButtonsArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`