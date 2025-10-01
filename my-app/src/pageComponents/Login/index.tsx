import { Container } from "@/baseComponents/BoxComponent";
import { TextComponent } from "@/baseComponents/TextComponent";
import { FormLogin } from "./form";

const Login = () => {

  return (
    <Container width="w-lg" display="flex" heigth="h-md" direction="flex-row">
      <Container
        padding="p-4"
        width="w-full"
        spaceContent="justify-start"
        direction="flex-col"
      >
        <TextComponent
          className="gap"
          as="h1"
          alignText="text-center"
          value="Creator hub"
          size="text-3xl"
        />
   
        <FormLogin  />
      </Container>
    </Container>
  );
};

export default Login;
