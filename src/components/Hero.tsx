import { Button, Heading, Stack } from "@chakra-ui/react";
import "../components/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="heroimage aboutme">
        <Stack direction={"column"}>
          <Heading color={"white"}>Abhishek Gupta</Heading>
          <Button>About me</Button>
        </Stack>
      </div>
    </>
  );
};

export default Hero;
