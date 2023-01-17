import React, { useContext, useState } from "react";
import { VidioContext } from "../../context";
import {
  Box,
  Box2,
  Box3,
  Box4,
  Box5,
  Button,
  Container,
  Img,
  Latter,
  Latters,
} from "./style";
const Body = () => {
  const { Vidio, SetVidio } = useContext(VidioContext);
  const [mas, SetMAs] = useState({});
  const ProgFilter = () => {
    SetVidio(Vidio.filter((v) => (v.type == "programming")));
  };
  const allFilter = () => {
    SetVidio(Vidio.filter((v) => (v.all == "all" )));
  };
  return (
    <>
      <Container>
        <Box>
          <Button onClick={allFilter}>all</Button>
          <Button onClick={ProgFilter}>programming</Button>
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
              <Box4>
                {" "}
                <Img src={v.img} />
                <Latters>{v.text}</Latters>
              </Box4>
              <Box5>
                <Latter>{v.name}</Latter>
                <Latter vvv>
                  {v.watch}.{v.data}
                </Latter>
              </Box5>
            </Box2>
          ))}
        </Box3>
      </Container>
    </>
  );
};
export default Body;
