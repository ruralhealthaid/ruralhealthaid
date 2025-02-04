import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export type PhoneInputProps = {
  inputClassName?: string;
  className?: string;
  value: string | undefined;
  onSetPhone: (newPhone: string) => void;
};

const CustomPhoneInput: React.FC<PhoneInputProps> = (props) => {
  return (
    <PhoneInput
      className={props.className}
      inputClassName={props.inputClassName}
      value={props.value}
      onChange={(newPhone) => props.onSetPhone(newPhone)}
    />
  );
};

export default CustomPhoneInput;
