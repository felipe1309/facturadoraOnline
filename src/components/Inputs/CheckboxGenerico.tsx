const CheckboxGenerico = () => {
  return (
    <>
      <label htmlFor="terminos">
        <input type="checkbox" />
        <span>acepta nuestros terminos y condiciones</span>
      </label>
      <style jsx>{`
        label {
          margin-top: 30px;
          display:flex;
          align-items:center;
          justify-content:center
        }
        input {
            width:20px;
            height:20px;
            margin-right:10px
        }
      `}</style>
    </>
  );
};

export default CheckboxGenerico;
