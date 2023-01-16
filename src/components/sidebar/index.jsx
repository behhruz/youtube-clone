import React, { useContext, useState } from "react";
import { Box, Box2, Image, Latter, Line, Lines } from "./style";
import Img1 from "../../assets/icon/home.png";
import Img2 from "../../assets/icon/shorts.png";
import Img3 from "../../assets/icon/subs.png";
import Img4 from "../../assets/icon/library.png";
import Img5 from "../../assets/icon/history.png";
import Img6 from "../../assets/icon/your.png";
import Img7 from "../../assets/icon/later.png";
import Img8 from "../../assets/icon/liked.png";
import Img9 from "../../assets/icon/show.png";
import { VidioContext } from "../../context";
const Sidebar = () => {
  const [state, SetState] = useContext(VidioContext);
  return (
    <>
      <Box>
        <Lines>
          {" "}
          <Box2>
            {" "}
            <Image src={Img1} />
            <Latter>Home</Latter>
          </Box2>
          <Box2>
            <Image src={Img2} />
            <Latter>Shorts</Latter>
          </Box2>
          <Box2>
            <Image src={Img3} />
            <Latter>Subscriptions</Latter>
          </Box2>
        </Lines>
        <Lines>
          {" "}
          <Box2>
            {" "}
            <Image src={Img4} />
            <Latter>Lİbrary</Latter>
          </Box2>
          <Box2>
            <Image src={Img5} />
            <Latter>History</Latter>
          </Box2>
          <Box2>
            <Image src={Img6} />
            <Latter>Your Videos</Latter>
          </Box2>
          <Box2>
            <Image src={Img7} />
            <Latter>Watch Later</Latter>
          </Box2>
          <Box2>
            <Image src={Img8} />
            <Latter>Liked Videos</Latter>
          </Box2>
          <Box2>
            <Image vv src={Img9} />
            <Latter>Show More</Latter>
          </Box2>
        </Lines>
        {state.map((v) => {
          return (
            <>
              <div>{v.name}</div>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default Sidebar;
