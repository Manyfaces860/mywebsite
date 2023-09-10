import { Button, Heading, Stack } from "@chakra-ui/react";
import { Link as LLink, animateScroll as scroll } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroimage aboutme">
      <Stack
        direction={"column"}
        className="content"
        w={["20", "400", "700"]}
        fontSize={["8", "11", "15"]}
      >
        <Heading fontFamily={"monospace"} color={"white"} className="name">
          Abhishek Gupta
        </Heading>
        <Button
          fontFamily={"sans-serif"}
          id="aboutbtn"
          colorScheme="pink"
          variant="ghost"
          className="nbbtn"
        >
          <LLink
            to="skillssection"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About me
          </LLink>
        </Button>{" "}
        <Button
          fontFamily={"sans-serif"}
          id="aboutbtn"
          colorScheme="yellow"
          variant="outline"
          className="nbbtn"
        >
          <LLink
            to="contactmee"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact me
          </LLink>
        </Button>{" "}
        // now its working coz i didnt add ChakraProvider to main.tsx
      </Stack>
    </div>
  );
};

export default Hero;
