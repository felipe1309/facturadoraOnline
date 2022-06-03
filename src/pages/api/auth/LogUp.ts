import { NextApiHandler } from "next";
import { validadorDeEmpresa } from "../../../utils/validadores/validadorDeEmpresa";
import "../../../utils/database";
import Empresa from "../../../models/Empresa";
const LogUp: NextApiHandler = async (req, res) => {
  const { method, body } = req;
  switch (method) {
      case "POST":
          try {
            const reqBody = validadorDeEmpresa(body)
            const empresa = new Empresa(reqBody)
            const empresaSave = await empresa.save()
            return res.status(201).json(empresaSave);
        } catch (error) {
            return res.status(400).json(error)
        }
    default:
      return res.status(500).json({msg:"metodo no soportado"})
  }
};
export default LogUp;
