import { useContext, useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { TaskContext } from "../../contexts/taskContext";
import { EditTaskService } from "../../services/Task/editTask";
import { DeleteTaskService } from "../../services/Task/deleteTask";

export default function ModalEditTask(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { listTask } = useContext(TaskContext);

  useEffect(() => {
    setName(props.data.name);
    setDescription(props.data.description);
  }, []);

  async function handleEditTask() {
    const taskId = props.data.id;
    const data = {
      name,
      description,
      taskId,
    };

    await EditTaskService(data);
    await listTask();

    props.close();
  }

  async function HandleDeleteTask() {
    const taskId = props.data.id;

    await DeleteTaskService(taskId);

    await listTask();

    props.close();
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardTask}>
        <View style={styles.titleView}>
          <TextInput
            placeholder="Nome da tarefa"
            value={name}
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
            value={description}
            placeholder="Descrição"
            multiline={true}
            placeholderTextColor="gray"
            onChangeText={(text) => setDescription(text)}
            style={styles.descriptionTask}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={handleEditTask} style={styles.button}>
            <Text style={styles.buttonText}>Editar Tarefa</Text>
          </TouchableOpacity>
          <Feather
            name="trash-2"
            size={35}
            color="#c44d4d"
            onPress={HandleDeleteTask}
          />
        </View>
      </View>
    </View>
  );
}