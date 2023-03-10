import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  width: 20%;
  height: 100wh;
 
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  /* background-color: grey; */
  margin: 3px 25px;
  width: 200px;
  height: 35px;
`;
const Image = styled.img`
  width: 17px;
  height: 17px;
  height: ${({ vv }) => vv && "9px"};
  width: ${({ radius }) => radius && "24px"};
  height: ${({ radius }) => radius && "24px"};
  border-radius: ${({ radius }) => radius && "50%"};
`;

const Lines = styled.div`
  border-bottom: 0.6px solid #303030;
  /* position: sticky;
  top: 0; */
`;
const Latter = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  margin: 0 20px;
`;
export { Box, Box2, Image, Latter, Lines };
