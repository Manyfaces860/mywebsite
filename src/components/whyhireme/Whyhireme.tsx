import { Box, Heading } from "@chakra-ui/react";
import "./Whyhireme.css"

const Whyhireme = () => {
  return (
    <Box w='100%' h={'600px'} paddingTop={'200px'}  className="whyhireme" >
      <Heading
        fontSize={"9xl"}
        textAlign={"center"}
        textColor={"yellow"}
      >
        Why hire me?
      </Heading>
    </Box>
  );
};

export default Whyhireme;
