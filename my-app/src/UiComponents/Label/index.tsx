import InputComponent, {
  InputComponentProps,
} from "@/baseComponents/InputComponent";

interface LabelProps extends InputComponentProps {
  label?: string;
}

export const Label = ({ label, ...props }: LabelProps) => {
  return (
    <div>
      {label && <p className="mb-3">{label}</p>}
      <InputComponent {...props} />
    </div>
  );
};
