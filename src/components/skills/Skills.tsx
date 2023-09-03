import { Box, Heading, Stack, Text, keyframes } from "@chakra-ui/react";

const Skills = () => {
  const skills = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tenetur.",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium officiis, atque nemo nesciunt maxime consectetur impedit aperiam.",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, tenetur ducimus reprehenderit cumque incidunt commodi",
    },
    { text: "Lorem ipsum dolor sit amet, consectetur" },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. S commodi nostrum at provident voluptas aliquam voluptates esse natus..",
    },
  ];

  const animation = keyframes`
        0%{
            background : black
        }
        30%{
            background : #F56565
        }
        60%{
            background : black
        }
        100%{
            background : #F56565
        }
    `;

  const textanimation = `${animation} infinite 0.5s 3s`;

  return (
    <Stack boxSize={'inherit'} justify={"center"} gap={"4"} fontSize={'lg'} padding={'24px'} >
      <div className="headingdiv" >
        <Heading fontSize={"inherit"} >Skills I can Offer.</Heading>
      </div>
      <Stack gap={'3'} className="skillsdiv">
        {skills.map((object) => (
          <Box
            className="skills"
            // width={"max-content"}
            bgColor={"red.400"}
            animation={textanimation}
            // fontSize={"20px"}
            key={object.text.substring(4)}
          >
            <Text whiteSpace={"normal"} color={"black"}>
              {object.text}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Skills;
