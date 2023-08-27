import { Button, Heading, Stack } from "@chakra-ui/react";
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <div className="heroimage aboutme">
        <Stack direction={"column"}>
          <Heading fontFamily={'monospace'} color={"white"}>Abhishek Gupta</Heading>
          <Button fontFamily={'sans-serif'} id="aboutbtn" colorScheme='pink' variant='ghost' >About me</Button> // now its working coz i didnt add ChakraProvider to main.tsx
        </Stack>
      </div>
    </>
  );
};

export default Hero;
