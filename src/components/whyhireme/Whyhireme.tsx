import { Box, Heading, Stack } from "@chakra-ui/react";
import "./Whyhireme.css"

const Whyhireme = () => {
  return (
    <Box w='100%' h='600px' className="whyhireme" >
      <Stack className="textdiv" >
        <Heading
          className="text"
          color={"yellow"}
          fontSize={{ base: "60px", md: "100px", lg: "200px" }}
        >
          Why hire me?
        </Heading>
      </Stack>
    </Box>
  );
};

export default Whyhireme;
