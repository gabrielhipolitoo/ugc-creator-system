import InputComponent, {
  InputComponentProps,
} from "@/baseComponents/InputComponent";

interface LabelProps extends InputComponentProps {
  label?: string;
}

export const Label = ({ label, ...props }: LabelProps) => {
  return (
    <div>
      {label && <p className="text-[15px] mb-1">{label}</p>}
      <InputComponent {...props} />
    </div>
  );
};
