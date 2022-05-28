import { NextApiHandler } from "next";
import { validadorUser } from "../../../utils/validadores/validadorDeUsers";
import "../../../utils/database";
import User from "../../../models/User";
const index: NextApiHandler = async (req, res) => {
  const { method, body, headers } = req;
  switch (method) {
    case "GET":
      try {
        const users = await User.find();
        return res.status(200).json(users);
      } catch (error) {
        return res.status(400).json({error});
      }
    case "POST":
      try {
        const userReq = validadorUser(body)
        const users = new User(userReq);
        const userSave = await users.save()
        return res.status(201).json(userSave)
      } catch (error) {
        console.log(error)
       return res.status(400).json({error})     
      }
    default:
      return res.status(400).json({error:"Metodo no permitido"})
  }
};

export default index;
