import { Container } from "@/baseComponents/BoxComponent";
import Login from "@/pageComponents/Login";
import { Background } from "@/UiComponents/Background";

export default function Home() {
  return (
    <Container align="items-center" width="w-full" spaceContent="justify-between">
      <Login />
      <Background />
    </Container>
  );
}
