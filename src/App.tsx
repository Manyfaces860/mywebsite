import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Hero from "./components/hero/Hero";
import Whyhireme from "./components/whyhireme/Whyhireme";
import Skills from "./components/skills/Skills";
import AdditionalInfo from "./components/additionalinfo/AdditionalInfo";
import HireMeForm from "./components/form/HireMeForm";

function App() {
  return (
    <Grid templateAreas={`"hero" "whyhireme" "skills" "additionalinfo" "form"`} m={'-0.2px'} >
      <GridItem area={"hero"}>
        <Hero />
      </GridItem>
      <GridItem area={"whyhireme"} >
        <Whyhireme />
      </GridItem>
      <GridItem area={"skills"} bg={'red.400'}>
        <Skills />
      </GridItem>
      <GridItem area={"additionalinfo"} bg={'whiteAlpha.900'}>
        <AdditionalInfo />
      </GridItem>
      <GridItem area={"form"}>
        <HireMeForm />
      </GridItem>
    </Grid>
  );
}

export default App;
