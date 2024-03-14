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
    alignItems: "center",
  },
  button: {
    width: "97%",
    borderRadius: 50,
    height: 45,
    backgroundColor: "rgba(134, 170, 206, 1)",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  nameTask: {
    fontSize: 20,
    width: "90%",
    fontWeight: "900",
    color: "rgba(54, 114, 173, 0.6)",
  },
  descriptionTask: {
    fontSize: 17,
    height: "90%",
    fontWeight: "700",
    textAlign: "left",
    textAlignVertical: "top",
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: 10,
  },
  titleView: {
    fontSize: 17,
    fontWeight: "900",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  descriptionView: {
    width: "100%",
    height: "70%",
  },
});

export default styles;
