import { useContext } from "react";
import { api } from "../../../libs/axios";
import { AuthContext } from "../../../contexts/auth";

export const listTaskService = async (input) => {
  try {
    const response = await api.get("/ListTask", { params: { input } });
    console.log("exibindo", input);

    return response;
  } catch (error) {
    throw (
      ({
        error: true,
        message: "Erro no servidor",
      },
      console.log(error))
    );
  }
};
