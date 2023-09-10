import { Flex, HStack, Heading } from "@chakra-ui/react";
import HireMeForm, { formData } from "../form/HireMeForm";
import usePost from "../../hooks/usePost";
import { formdetails } from "../../App";

interface Props {
  HandleonSubmit: (formdetail: formData) => void;
  detail: formdetails;
}

const FormSection = ({ HandleonSubmit, detail }: Props) => {
  // let ResponseData : PostResponse | undefined;
  // let error : string | undefined ;
  // if (detail.formdetail.name !== 'noname') {
    const { responseData, Error , isLoading } = usePost(detail);
    // ResponseData = responseData ;
    // error = Error ;
  // }

  return (
    <HStack
      display={"flex"}
      justifyContent={"space-around"}
      bgColor={"whatsapp.600"}
    >
      <HireMeForm onSubmit={(formdetail) => HandleonSubmit(formdetail)} loadingstatus = {isLoading} />
    </HStack>
  );
};

export default FormSection;
