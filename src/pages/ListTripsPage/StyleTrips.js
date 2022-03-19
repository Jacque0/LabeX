import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const ContainerTrips = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainTrips = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${mainColors.fundo};
  #button-bottom {
    align-self: center;
    display: none;
    @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: flex;
    }
  }
`;
export const TripsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${mainColors.fundo};
  justify-content: center;
  img {
    border-radius: 50%;
  }
`;
export const ButtonsArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
