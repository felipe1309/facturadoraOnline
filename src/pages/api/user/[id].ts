import { NextApiHandler } from "next";
import User from "../../../models/User";
import { validadorUser } from "../../../utils/validadores/validadorDeUsers";
const handdler: NextApiHandler = async (req, res) => {
  const { method, body, query, headers } = req;
  switch (method) {
    case "GET":
      try {
        const userID = query.id as string
        const user = await User.findById(userID);
        if(!user) return res.status(404).json({error: "Usuario no encontrado"})
        return res.status(201).json(user);
      } catch (error) {
        return res.status(400).json({ error });
      }
    case "DELETE":
      try {
        const idUser = query.id as string;
        const user = await User.findByIdAndDelete(idUser);
        return res.status(201).json({ msg: "user eliminado" });
      } catch (error) {
        return res.status(400).json({ error });
      }
    case "PUT":
      try {
        const userUpdate = validadorUser(body);
        const user = await User.findByIdAndUpdate(query.id as string, userUpdate);
        return res.status(201).json(user);
      } catch (error) {
        return res.status(400).json({ error });
      }
    default:
      return res.status(400).json({ error: "Metodo no permitido" });
  }
};
export default handdler;
