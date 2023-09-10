import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import "./Skills.css";

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

  // const animation = keyframes`
  //       0%{
  //           background : black
  //       }
  //       30%{
  //           background : #F56565
  //       }
  //       60%{
  //           background : black
  //       }
  //       100%{
  //           background : #F56565
  //       }
  //   `;

  // const textanimation = `${animation} 3 0.5s 3s forward`;

  return (
    <section id="skillssection" >
      <Stack
        boxSize={"inherit"}
        justify={"center"}
        gap={"4"}
        fontSize={"lg"}
        padding={"70px"}
        w={["65%", "90%", "90%"]}
      >
        <div className="headingdiv">
          <Heading fontSize={["lg", "xl", "4xl"]}><p id="skillsheading" >Skills I can Offer.</p></Heading>
        </div>
        <Stack gap={"7"} className="skillsdiv">
          {skills.map((object) => (
            <Box
              className="skills"
              // width={"max-content"}
              bgColor={"red.400"}
              // animation={textanimation}
              // fontSize={"20px"}
              key={object.text.substring(4)}
            >
              <Text
                whiteSpace={"normal"}
                color={"black"}
                fontSize={["sm", "md", "lg", "xl"]}
              >
                <p className="skillstext">{object.text}</p>
              </Text>
            </Box>
          ))}
        </Stack>
      </Stack>
    </section>
  );
};

export default Skills;
