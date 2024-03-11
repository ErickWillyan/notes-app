import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../../../libs/axios";

export const getUserService = async () => {
  try {
    const userInfo = await AsyncStorage.getItem("@notes-api");
    let hasUser = JSON.parse(userInfo || "{}");
    if (Object.keys(hasUser).length > 0) {
      api.defaults.headers.common["Authorization"] = `Bearer ${hasUser.token}`;
    }

    return hasUser;
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
