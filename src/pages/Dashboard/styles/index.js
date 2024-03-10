import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  taskView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100vw",
    justifyContent: "space-between",
    paddingHorizontal: 26,
    marginTop: 34,
  },
  textTask: {
    fontSize: 24,
    fontWeight: "700",
    color: "#808285",
  },
  icon: {
    borderRadius: 110,
  },
  taskContainer: {
    backgroundColor: "#3f4",
    alignItems: "center",
  },
});

export default styles;
