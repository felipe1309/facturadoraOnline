import { empresa, empresaSinId } from "../types/empresa";
import axios from "axios";
export const createANewEmpresa = async (empresa: empresaSinId):Promise<empresa | undefined> => {
    try {
        const res = await axios.post("http://localhost:3000/api/auth/LogUp", empresa);
        return res.data as empresa
    } catch (error) {
        throw new Error("user input error");
    }
};
