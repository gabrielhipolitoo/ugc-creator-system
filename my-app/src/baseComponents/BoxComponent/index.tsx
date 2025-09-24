
import { Wrapper } from "../WrapperComponent";
import { WrapperContainerProps } from "../WrapperComponent/wrappers/WrapperContainer";

export const Container = ({ children, ...props }: WrapperContainerProps) => {
  return (
    <Wrapper.Container
      display="flex"
      direction="flex-row"
      spaceContent="justify-center"
      gap="gap-8"
      width="w-full"
      heigth="h-full"
      {...props}
    >
      {children}
    </Wrapper.Container>
  );
};
