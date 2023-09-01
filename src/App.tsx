import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Hero from "./components/hero/Hero";
import Whyhireme from "./components/whyhireme/Whyhireme";
import Skills from "./components/skills/Skills";
import AdditionalInfo from "./components/additionalinfo/AdditionalInfo";
import { formData } from "./components/form/HireMeForm";
import { useState } from "react";
import FormSection from "./components/formsection/FormSection";

export interface formdetails {
  formdetail: formData;
}




function App() {
  const [details, setDetails] = useState<formdetails>({} as formdetails);

  // console.log(Data);

  // when you click the submit button then first the data is set thenn line 34 and 48 is executed and all of them print the same object
  // which means data is getting set properly
  // but why are the lines excecuted after postemail function?

  // answer to above question -> when the postemail function is executed , the state gets changed and which
  //                             causes the component to rerender by diffing algo to differentiate the changes
  //                             in the component and rerender the changed parts of the component. in this case
  //                             nothing is changed , so it logs the changed state data to the console.
  //
  // but why the emails i get after filling the form always contains previous state form values or in case of filling the form
  // first time after reload ,it doesn't send i get a cors error?

  // answer to above question -> when we fill the form first time then it does not have any values so it
  //                             uses default string values defined by me as userDataJson to send as body
  //                             and after filling the form for first time we set the state to the values
  //                             we entered as a result the new userDataJson becomes the values we entered when
  //                             we filled the form for the first time and now if we fill the form second time
  //                             the first filled form userDataJson is used to send request.

  return (
    <Grid
      templateAreas={`"hero" "whyhireme" "skills" "additionalinfo" "form"`}
      m={"-0.2px"}
    >
      <GridItem area={"hero"}>
        <Hero />
      </GridItem>
      <GridItem area={"whyhireme"}>
        <Whyhireme />
      </GridItem>
      <GridItem area={"skills"} bg={"red.400"}>
        <Skills />
      </GridItem>
      <GridItem area={"additionalinfo"} bg={"whiteAlpha.900"}>
        <AdditionalInfo />
      </GridItem>
      <GridItem area={"form"}>
        <FormSection
          HandleonSubmit={(formdetail) => {
            setDetails({ ...details, formdetail });
            console.log(formdetail);
          }}
          detail={details}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
