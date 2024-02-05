import { api } from "../../libs/axios";

export const CreateUserService = async (input) => {
  try {
    const response = await api.post("/RegisterUser", input);
    if (response.status < 400) {
      return {
        error: false,
        message: "Usuário criado!!",
      };
    } else {
      return {
        error: true,
        message: "Erro ao cadastrar usuário",
      };
    }
  } catch (error) {
    throw {
      error: true,
      message: "Erro no servidor",
    };
  }
};
