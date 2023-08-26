import { useState } from "react";
import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Hero from "./components/Hero";
function App() {
  return (
    <Grid templateAreas={`"hero" "whyhireme" "skills" "additionalinfo" "form"`} m={'-8.2px'} >
      <GridItem area={"hero"}>
        <Hero />
      </GridItem>
      <GridItem area={"whyhireme"} bg={"lightgreen"}>
        whyhireme
      </GridItem>
      <GridItem area={"skills"} bg={"grey"}>
        skills
      </GridItem>
      <GridItem area={"additionalinfo"} bg={"yellow"}>
        additionalinfo
      </GridItem>
      <GridItem area={"form"} bg={"lightblue"}>
        Form
      </GridItem>
    </Grid>
  );
}

export default App;
