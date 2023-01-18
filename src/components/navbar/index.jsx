import React, { useContext } from "react";
import { Box, Div, Imge, Input, Mini_box } from "./style";
import Icon from "../../assets/icon/youtube.png";
import Icon1 from "../../assets/icon/Logo.png";
import Icon2 from "../../assets/icon/dark.png";
import Icon3 from "../../assets/icon/light.png";
import Icon4 from "../../assets/icon/search.png";
import Icon5 from "../../assets/icon/Icon.png";
import Icon6 from "../../assets/icon/watch.png";
import Icon7 from "../../assets/icon/nine.png";
import Icon8 from "../../assets/icon/Vector.png";
import Icon9 from "../../assets/image/my.jpg";
import { ThemeContext } from "../../App";

const Navbar = () => {
  let { state, SetState } = useContext(ThemeContext);
  return (
    <>
      <Box>
        <Mini_box first>
          <Mini_box>
            <Imge src={Icon} />
            <Imge youtube src={Icon1} />
          </Mini_box>
          <Mini_box active>
            
            <Imge change src={Icon2} />
            <Imge change src={Icon3} />
          </Mini_box>
        </Mini_box>
        <Mini_box>
          <Input placeholder="Searc"></Input>
          <Div act>
            <Imge src={Icon4} change />
          </Div>
          <Imge src={Icon5} />
        </Mini_box>
        <Mini_box>
          <Imge changed src={Icon6} />
          <Imge changed src={Icon7} />
          <Imge changed src={Icon8} />
          <Imge changedd src={Icon9} />
        </Mini_box>
      </Box>
    </>
  );
};
export default Navbar;
