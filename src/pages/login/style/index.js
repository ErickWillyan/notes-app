import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 54,
    width: "90%",
    backgroundColor: "rgba(45, 48, 51, 0.1)",
    borderRadius: 5,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    height: 54,
    width: "90%",
    backgroundColor: "#3672AD",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },

  forms: {
    flex: 1,
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  cardButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 35,
  },

  linkText: {
    color: "#3672AD",
    fontSize: 16,
  },

  view: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "40%",
    height: "10%",
    marginLeft: 15,
    marginTop: 10,
  },
});

export default styles;
