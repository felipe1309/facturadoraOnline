import { NextApiHandler } from "next";

const handdler: NextApiHandler = (req, res) => {
  const { method, body, headers } = req;
  if (typeof headers.tokenEmpresa !=="string") return res.status(400).json({error:"Token de empresa no encontrado"})
  switch (method) {
      case "GET":
        try {
            if (typeof headers.tokenUser!=="string") return res.status(400).json({error:"Token de usuario no encontrado"})
        } catch (error) {
            
        }
      default:
          break;
  }
};
export default handdler;
