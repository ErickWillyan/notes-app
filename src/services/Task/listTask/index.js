import { api } from "../../../libs/axios";

export const listTaskService = async (input) => {
  try {
    const userId = input;
    const response = await api.get("/ListTask", { params: { userId } });

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
