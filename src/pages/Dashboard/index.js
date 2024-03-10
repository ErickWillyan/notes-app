import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AuthContext } from "../../contexts/auth";
import styles from "./styles";
import Navbar from "../../components/navbar";
import { MaterialIcons } from "@expo/vector-icons";
import CardTask from "../../components/cardTask";

export default function Dashboard() {
  const { singOut } = useContext(AuthContext);

  const [task, setTask] = useState([
    {
      name: "Produto A",
      description:
        "Este é o produto A, uma descrição breve sobre suas características.",
    },
    {
      name: "Serviço X",
      description:
        "O Serviço X oferece soluções inovadoras para melhorar sua experiência.",
    },
    {
      name: "Evento Y",
      description:
        "Participe do Evento Y e aproveite uma experiência única cheia de atividades emocionantes.",
    },
    {
      name: "Aplicativo Z",
      description:
        "O Aplicativo Z é uma ferramenta poderosa para simplificar tarefas cotidianas e melhorar a eficiência.",
    },
    {
      name: "Livro B",
      description:
        "Explore as páginas do Livro B e mergulhe em uma história cativante cheia de reviravoltas emocionantes.",
    },
  ]);
  return (
    <View>
      <Navbar />
      <View style={styles.taskView}>
        <Text style={styles.textTask}>Tarefas</Text>
        <MaterialIcons name="add-box" size={50} color="#86aace" />
      </View>
      <View style={styles.taskContainer}>
        <FlatList
          data={task}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardTask data={item} />}
        />
      </View>
    </View>
  );
}
