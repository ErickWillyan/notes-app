import { api } from "../../libs/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signService = async (input) => {
  try {
    const response = await api.post("/AuthUser", input);
    const { id, name, token } = response.data;

    const data = {
      ...response.data,
    };

    await AsyncStorage.setItem("@notes-api", JSON.stringify(data));

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return response;
  } catch (error) {
    console.log("erro ao acessar", error);
  }
};
