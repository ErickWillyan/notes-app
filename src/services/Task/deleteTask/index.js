import { api } from "../../../libs/axios";

export const DeleteTaskService = async (input) => {
  try {
    const taskId = input;
    const response = await api.delete("/DeleteTask", { params: { taskId } });

    if (response.status < 400) {
      return console.log(input);
    } else {
      return {
        error: true,
        message: "Erro ao deletar task",
      };
    }
  } catch (error) {
    throw {
      error: true,
      message: "Erro no servidor",
    };
  }
};
