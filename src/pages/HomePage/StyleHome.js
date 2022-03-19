import styled from "styled-components";
import fundoHome from "../../assets/fundoHome.jpg"

export const ContainerHome = styled.div`
    display: flex;
    height: 100%;
`

export const LateralMenu = styled.div`
    width: 350px;
    display: flex;
    margin: 20px;
    flex-direction: column;
    img {
        margin: 40px 0 70px 0;
        height: 100px;
        align-self: center;
        border-radius: 50%;
    }
`
export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button:hover{
        transform: scale(1.2);
    }
    #button-trips{
        width: 200px;
    }
`

export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${fundoHome});
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: none;
    }
`

export const TitleSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`