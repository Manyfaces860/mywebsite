import { Flex, HStack, Heading } from "@chakra-ui/react";
import HireMeForm, { formData } from "../form/HireMeForm";
import usePost from "../../hooks/usePost";
import { formdetails } from "../../App";

interface Props {
  HandleonSubmit: (formdetail: formData) => void;
  detail: formdetails;
}

const FormSection = ({ HandleonSubmit, detail }: Props) => {
  const { responseData, Error } = usePost(detail);

  return (
    <HStack
      display={"flex"}
      justifyContent={"space-around"}
      bgColor={"whatsapp.600"}
    >
      {responseData?.status === "" ? (
        <Heading>{responseData?.status}</Heading>
      ) : (
        <Heading>{Error}</Heading>
      )}
      <HireMeForm onSubmit={(formdetail) => HandleonSubmit(formdetail)} />
    </HStack>
  );
};

export default FormSection;
