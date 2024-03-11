import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles";
import Navbar from "../../components/navbar";
import { MaterialIcons } from "@expo/vector-icons";
import CardTask from "../../components/cardTask";
import { listTaskService } from "../../services/Task/listTask";

export default function Dashboard() {
  const { singOut, user } = useContext(AuthContext);
  const [task, setTask] = useState([]);
  useEffect(() => {
    async function listTask() {
      const userId = user.id;
      const response = await listTaskService(userId);

      setTask(response.data);
    }

    listTask();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Navbar />
        <View style={styles.taskView}>
          <Text style={styles.textTask}>Tarefas</Text>

          <MaterialIcons name="add-box" size={55} color="#86aace" />
        </View>
      </View>
      <FlatList
        style={styles.taskContainer}
        data={task}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardTask data={item} />}
      />
    </View>
  );
}
