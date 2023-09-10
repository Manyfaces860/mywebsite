import {
  Button,
  ButtonGroup,
  Card,
  Center,
  Divider,
  HStack,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "./HireMeForm.css";
import GitHubLogo from "../GitHubLogo";
import LinkedInLogo from "../LinkedInLogo";
import InstagramLogo from "../InstagramLogo";

export interface formData {
  name: string;
  organisation: string;
  email: string;
  phone?: number;
  comment?: string;
}
export interface Props {
  onSubmit: (formdetail: formData) => void;
}

const HireMeForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();

  const isLoading = false;

  return (
    <div className="container" id="contactmee">
      <div className="formdiv">
        <Card
          gap={"7"}
          padding={"50px"}
          display={"flex"}
          justifyContent={"center"}
          height={"650px"}
          bgColor={"whatsapp.900"}
          borderRadius={"0px"}
        >
          <Heading fontSize={"3xl"} color={"CaptionText"} className="contact" >
            <p className="contactmeheading" >
              Contact Me
            </p>
          </Heading>

          <form
            onSubmit={handleSubmit((formdetail) => {
              onSubmit(formdetail);
              reset();
            })}
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Input
              {...register("name", { required: true, minLength: 5 })}
              id="name"
              type="text"
              bgColor={"blackAlpha.700"}
              style={{ transition: "all 0.3s ease" }}
              _hover={{ height: "50px" }}
            />
            {errors.name?.type === "minLength" && (
              <p>minimum length of this field is 5.</p>
            )}
            {errors.name?.type === "required" && <p>this area is required.</p>}
            <label htmlFor="organisation" className="form-label">
              organisation
            </label>
            <Input
              {...register("organisation", { required: true, minLength: 3 })}
              id="organisation"
              type="text"
              bgColor={"blackAlpha.700"}
              style={{ transition: "all 0.3s ease" }}
              _hover={{ height: "50px" }}
            />
            {errors.organisation?.type === "minLength" && (
              <p>minimum length of this field is 3.</p>
            )}
            {errors.organisation?.type === "required" && (
              <p>this area is required.</p>
            )}
            <label htmlFor="email" className="form-label">
              email
            </label>
            <Input
              {...register("email", { required: true })}
              id="email"
              type="text"
              bgColor={"blackAlpha.700"}
              style={{ transition: "all 0.3s ease" }}
              _hover={{ height: "50px" }}
            />
            {errors.email?.type === "required" && <p>this area is required.</p>}
            <label htmlFor="phone" className="form-label">
              phone
            </label>
            <Input
              {...register("phone", { required: false })}
              id="phone"
              type="tele"
              bgColor={"blackAlpha.700"}
              style={{ transition: "all 0.3s ease" }}
              _hover={{ height: "50px" }}
            />
            {errors.phone?.type === "required" && <p>this area is required.</p>}
            <label htmlFor="comment" className="form-label comment">
              comment
            </label>
            <Input
              {...register("comment", { required: false })}
              id="comment"
              type="text"
              bgColor={"blackAlpha.700"}
              style={{ transition: "all 0.3s ease" }}
              _hover={{ height: "50px" }}
            />
            {errors.comment?.type === "required" && (
              <p>this area is required.</p>
            )}
            <Button
              type="submit"
              loadingText="Submitting"
              colorScheme="teal"
              variant="ghost"
            >
              submit
            </Button>
          </form>
        </Card>
      </div>

      <div className="dividerdiv" >
        <Center height="100px" marginLeft={'50px'} className="divider" >
          <Divider orientation="vertical" bgColor={"black"} />
        </Center>
      </div>

      <div className="socialdiv">
        <ButtonGroup ml={"30px"}>
          <Button className="Logobtn">
            {" "}
            <Link href="https://github.com/Manyfaces860/">
              <GitHubLogo />
            </Link>{" "}
          </Button>
          <Button className="Logobtn">
            {" "}
            <Link href="https://www.linkedin.com/in/abhishek-gupta-manyfaces860/">
              <LinkedInLogo />
            </Link>{" "}
          </Button>
          <Button className="Logobtn">
            {" "}
            <Link href="https://www.instagram.com/selami.sauc/">
              <InstagramLogo />
            </Link>{" "}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default HireMeForm;
