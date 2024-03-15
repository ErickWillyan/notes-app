import { api } from "../../../libs/axios";

export const EditTaskService = async (input) => {
  try {
    const response = await api.put("/AlterTask", input);
    if (response.status < 400) {
      return {
        error: false,
        message: "Tarefa alterada",
      };
    } else {
      return {
        error: true,
        message: "Erro ao editar tarefa",
      };
    }
  } catch (error) {
    throw {
      error: true,
      message: "Erro no servidor",
    };
  }
};
