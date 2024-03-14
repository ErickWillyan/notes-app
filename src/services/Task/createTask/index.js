import { api } from "../../../libs/axios";

export const CreateTaskService = async (input) => {
  try {
    const response = await api.post("/RegisterTask", input);
    if (response.status < 400) {
      return {
        error: false,
        message: "Tarefa criada",
      };
    } else {
      return {
        error: true,
        message: "Erro ao cadastrar task",
      };
    }
  } catch (error) {
    throw {
      error: true,
      message: "Erro no servidor",
    };
  }
};
