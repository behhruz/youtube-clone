import React, { useContext } from "react";
import { VidioContext } from "../../context";
import { Box, Box2, Box3, Button, Container, Img } from "./style";
const Body = () => {
  const { Vidio, SetVidio } = useContext(VidioContext);
  return (
    <>
      <Container>
        <Box>
          <Button>all</Button>
          <Button>programming</Button>
          <Button>music</Button>
          <Button>interview</Button>
          <Button>sport</Button>
          <Button>cars</Button>
        </Box>
        <Box3>
          {Vidio.map((v) => (
            <Box2 key={v.id}>
              <iframe
                src={v.vidio}
                width="240"
                height="135"
                frameborder="0"
              ></iframe>
              <Img src={v.img}/>
            </Box2>
          ))}
        </Box3>
      </Container>
    </>
  );
};
export default Body;
