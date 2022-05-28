import { NextApiHandler } from "next";
import "../../../utils/database";
import { validadorDeEmpresa } from "../../../utils/validadores/validadorDeEmpresa";
const LogIn: NextApiHandler = (req, res) => {
  const { method,body } = req;
  console.log(body)
  try {
    const dataEmpresa = validadorDeEmpresa(body)
    return res.status(201).json(dataEmpresa)
  } catch (error) {
    return res.status(401).json({msg:error})
  }
}

export default LogIn;
