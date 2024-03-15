import React, { useContext, useState, useEffect } from "react";
import { View, Text, FlatList, Modal } from "react-native";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles";
import Navbar from "../../components/navbar";
import { MaterialIcons } from "@expo/vector-icons";
import CardTask from "../../components/cardTask";
import { TaskContext } from "../../contexts/taskContext";
import ModalNewTask from "../modalNewTask";

export default function Dashboard() {
  const { task } = useContext(TaskContext);
  const [modalVisible, setModalVisible] = useState(false);

  function modalOpen() {
    setModalVisible(true);
  }

  function modalClose() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View>
        <Navbar />
        <View style={styles.taskView}>
          <Text style={styles.textTask}>Tarefas</Text>

          <MaterialIcons
            name="add-box"
            size={55}
            color="#86aace"
            onPress={modalOpen}
          />
        </View>
      </View>

      <FlatList
        style={styles.taskContainer}
        data={task}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardTask data={item} />}
      />
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <ModalNewTask close={modalClose} />
      </Modal>
    </View>
  );
}
