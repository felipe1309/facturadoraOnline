import { inputSubmitGenericoStyle } from "../../styles/inputs";
type propsInputSubmitGenerico = {
  value: string;
};
const InputSubmitGenerico = ({ value }: propsInputSubmitGenerico) => {
  return (
    <>
      <div>
        <input type="submit" value={value} />
      </div>
      <style jsx>{inputSubmitGenericoStyle}</style>
    </>
  );
};

export default InputSubmitGenerico;
