import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  width: 240px;
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
  height: ${({vv})=> vv && '9px' };
`;


const Lines = styled.div`
border-bottom: 0.7px solid #303030;
`
const Latter = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  margin: 0 20px;
`;
export { Box, Box2, Image, Latter,Lines };
