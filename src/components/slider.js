import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Slide = styled.div`
  text-align: center;
  height: 200px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(calc(-100%))";
    if (props.dir === PREV) return "translateX(calc(2 * (-100%)))";
    return "translateX(0%)";
  }};
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    background-color: rgb(26 40 51 / 60%);
    border: 0;
    cursor: pointer;
    position: relative;
    bottom: 120px;
    float: ${props => props.float};

  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 75%;
`;
