export interface user {
  key: number;
  password: string;
  typeUser: userTypes;
  _id: string;
}
export type userToken =
  | {
      auth: true;
      token: string;
    }
  | {
      auth: false;
      token: null;
    }
  | {
      auth: undefined;
    };
export type userTypes = "admin" | "user";
export type userSinId = Omit<user,"_id">;