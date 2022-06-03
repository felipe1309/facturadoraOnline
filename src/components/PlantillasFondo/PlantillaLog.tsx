import { ReactElement } from "react";

type propsPlantillaLog = {
  src: string;
  alt: string;
  children: ReactElement | ReactElement[];
};
const PlantillaLog = ({ alt, src, children }: propsPlantillaLog) => {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        {children}
      </div>
      <style jsx>{`
        img {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -100;
          opacity: 0.7;
        }
        div {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          background: rgb(0, 0, 0);
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0.7231267507002801) 0%,
            rgba(0, 212, 255, 0) 100%
          );
        }
      `}</style>
    </>
  );
};

export default PlantillaLog;
