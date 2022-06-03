import { NextApiHandler } from "next";
import Empresa from "../../../models/Empresa";

const index: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const empresas = await Empresa.find({});
        return res.status(200).json(empresas);
      } catch (error) {
        return res.status(500).json({ error:error });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
};
export default index;
