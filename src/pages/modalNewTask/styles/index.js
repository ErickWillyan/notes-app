import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  cardTask: {
    height: 350,
    width: "90%",
    backgroundColor: "#d7e2ee",
    borderRadius: 20,
    padding: 26,
    justifyContent: "space-around",
  },
  button: {
    width: "100%",
    borderRadius: 50,
    height: 40,
    backgroundColor: "rgba(134, 170, 206, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  nameTask: {},
  descriptionTask: {},
});

export default styles;
