import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import "./HireMeForm.css";

interface formData {
  name: string;
  organisation: string;
  email: string;
  phone?: number;
  comment?: string;
}
interface Props {
  onSubmit: (data: formData) => void;
}

const HireMeForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();


  return (
    <Stack className="bg-grad" h={"700px"} gap={"7"}>
      <Heading fontSize={"5xl"} color={"CaptionText"}>
        Contact Me
      </Heading>

      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
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
        {errors.comment?.type === "required" && <p>this area is required.</p>}

        <Button type="submit">submit</Button>
      </form>
    </Stack>
  );
};

export default HireMeForm;
