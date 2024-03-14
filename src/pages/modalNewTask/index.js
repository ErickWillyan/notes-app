import { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { AuthContext } from "../../contexts/auth";
import { CreateTaskService } from "../../services/Task/createTask";
import { TaskContext } from "../../contexts/taskContext";

export default function ModalNewTask(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { user } = useContext(AuthContext);
  const { task, listTask } = useContext(TaskContext);

  async function handleCreateTask() {
    const userId = user.id;
    const data = {
      name,
      description,
      userId,
    };

    await CreateTaskService(data);
    await listTask();

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
            onChangeText={(text) => setDescription(text)}
            style={styles.descriptionTask}
          />
        </View>

        <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
