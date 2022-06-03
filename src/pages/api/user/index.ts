import { NextApiHandler } from "next";
import { validadorUser } from "../../../utils/validadores/validadorDeUsers";
import "../../../utils/database";
import User from "../../../models/User";
const index: NextApiHandler = async (req, res) => {
  const { method, body } = req;
  if (typeof process.env.SERCRET_KEY_JWT !== "string")
    return res
      .status(400)
      .json({ error: "necesita una secre key paa generar el token" });
  switch (method) {
    case "POST":
      try {
        console.log(body)
        const userReq = validadorUser(body);
        const users = new User(userReq);
        const userSave = await users.save();
        return res.status(201).json(userSave);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
      }
    default:
      return res.status(400).json({ error: "Metodo no permitido" });
  }
};

export default index;
