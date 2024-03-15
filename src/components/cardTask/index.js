import react, { useState } from "react";
import { View, Text, Modal, Pressable } from "react-native";
import styles from "./styles";
import ModalEditTask from "../../pages/modalEditText";

export default function cardTask({ data }) {
  const [modalVisible, setModalVisible] = useState(false);

  function modalOpen() {
    setModalVisible(true);
  }

  function modalClose() {
    setModalVisible(false);
  }
  if (data.description === null) {
    return (
      <Pressable style={styles.cardTaskDescriptionNone} onPress={modalOpen}>
        <Text style={[styles.titleCard, { fontSize: 15 }]}>{data.name}</Text>
        <Modal transparent={true} animationType="fade" visible={modalVisible}>
          <ModalEditTask data={data} close={modalClose} />
        </Modal>
      </Pressable>
    );
  }
  return (
    <Pressable style={styles.cardTask} onPress={modalOpen}>
      <View style={styles.titleView}>
        <Text style={styles.titleCard}>{data.name}</Text>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>{data.description}</Text>
      </View>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <ModalEditTask data={data} close={modalClose} />
      </Modal>
    </Pressable>
  );
}
