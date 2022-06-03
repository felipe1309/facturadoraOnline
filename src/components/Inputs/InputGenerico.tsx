import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { inputGenericoStyle } from "../../styles/inputs";
type propsInutGenerics = {
  name: string;
  placeholder: string;
  typeInput: HTMLInputTypeAttribute;
  require?: boolean;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
const InputGenerico = ({
  name,
  placeholder,
  typeInput,
  require,
  label,
  onChange,
  value
}: propsInutGenerics) => {
  return (
    <>
      <div>
        {label ? <label>{label} :</label> : null}
        <input
          value={value}
          tabIndex={2}
          type={typeInput}
          name={name}
          placeholder={placeholder}
          required={require}
          onChange={onChange}
        />
      </div>
      <style jsx>{inputGenericoStyle}</style>
    </>
  );
};

export default InputGenerico;
