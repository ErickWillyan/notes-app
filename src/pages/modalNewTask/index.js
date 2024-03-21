import { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { AuthContext } from "../../contexts/auth";
import { CreateTaskService } from "../../services/Task/createTask";
import { TaskContext } from "../../contexts/taskContext";
import Toast from "react-native-toast-message";
import { StatusBar } from "expo-status-bar";

export default function ModalNewTask(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { user } = useContext(AuthContext);
  const { listTask } = useContext(TaskContext);

  async function handleCreateTask() {
    if (name == null || name == " " || name == "") {
      Toast.show({
        type: "error",
        text1: "Tarefa não criada",
        text2: "Digite o nome da tarefa",
        visibilityTime: 3000,
      });

      return;
    }

    const userId = user.id;
    const data = {
      name,
      description,
      userId,
    };

    await CreateTaskService(data);
    await listTask();
    Toast.show({
      type: "success",
      text1: "Tarefa Criada",
      visibilityTime: 2000,
    });
    props.close();
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardTask}>
        <View style={styles.titleView}>
          <TextInput
            placeholder="Nome da tarefa"
            placeholderTextColor="rgba(134, 170, 206, 1)"
            onChangeText={(text) => setName(text)}
            style={styles.nameTask}
          />
          <Feather
            name="x"
            onPress={props.close}
            size={35}
            color="rgba(134, 170, 206, 1)"
          />
        </View>
        <View style={styles.descriptionView}>
          <TextInput
            placeholder="Descrição"
            multiline={true}
            placeholderTextColor="gray"
            onChangeText={(text) =>
              text == " " ? setDescription(null) : setDescription(text)
            }
            style={styles.descriptionTask}
          />
        </View>

        <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Toast />
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.4)" translucent={false} />
    </View>
  );
}
