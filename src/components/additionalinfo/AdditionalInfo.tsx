import { Heading, Stack, calc } from "@chakra-ui/react"
import { calcLength } from "framer-motion"



const AdditionalInfo = () => {
  return (
    <Stack boxSize={'lg'} justify={"center"} paddingLeft={'16'} className="headingdiv" >
        <Heading color={'black'} className="heading" fontSize={["md", "lg", "xl"]} >
            Additonal Info about me...
        </Heading>
        
    </Stack>
  )
}

export default AdditionalInfo