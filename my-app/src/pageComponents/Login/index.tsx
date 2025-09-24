import { Container } from "@/baseComponents/BoxComponent";
import { TextComponent } from "@/baseComponents/TextComponent";
import { FormLogin } from "./form";

const Login = () => {

  return (
    <Container width="w-lg" display="flex" direction="flex-col">
      <Container
        padding="p-4"
        width="w-full"
        spaceContent="justify-start"
        direction="flex-col"
      >
        <TextComponent
          className="gap"
          as="h1"
          value="Working"
          size="text-3xl"
        />
        <TextComponent
          className="gap"
          as="p"
          value="Faça seu login"
          size="text-lg"
        />
        <FormLogin  />
      </Container>
    </Container>
  );
};

export default Login;
