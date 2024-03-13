import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ModalNewTask(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.cardTask}>
        <TextInput
          placeholder="Nome da tarefa"
          placeholderTextColor="gray"
          onChangeText={(text) => setName(text)}
          style={styles.nameTask}
        />
        <TextInput
          placeholder="Descrição"
          placeholderTextColor="gray"
          onChangeText={(text) => setDescription(text)}
          style={styles.descriptionTask}
        />

        <TouchableOpacity onPress={props.close} style={styles.button}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
