import styled from "styled-components";
import { mainColors } from "../constants/colors";

const Title = styled.div`
    display: flex;
    margin: 40px 0;
    .animationX {
        animation: zoom-back 5s infinite;
        color: ${mainColors.destaque};
    }
    @keyframes zoom-back {
        0% {
            transform: scale(1) rotate(0);
        }
        50%{
            transform: scale(2) rotate(180deg);
        }
        100% {
            transform: scale(1) rotate(0);
        }
    }
`

export default function IconLabeX() {
  return (
    <Title><h1>Labe</h1><h1 className="animationX" >X</h1></Title>
  )
}
