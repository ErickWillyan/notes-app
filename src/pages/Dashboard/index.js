import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles";
import Navbar from "../../components/navbar";
import { MaterialIcons } from "@expo/vector-icons";
import CardTask from "../../components/cardTask";
import { listTaskService } from "../../services/Task/listTask";
import { TaskContext } from "../../contexts/taskContext";

export default function Dashboard() {
  const { task } = useContext(TaskContext);

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
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardTask data={item} />}
      />
    </View>
  );
}
