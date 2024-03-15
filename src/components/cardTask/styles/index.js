import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardTask: {
    minHeight: 80,
    marginBottom: 20,
    backgroundColor: "#d6e2ef",
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
  titleCard: {
    fontWeight: "900",
    color: "#769ec6",
  },
  descriptionView: {
    flex: 1,
    justifyContent: "center",
  },
  descriptionText: {
    color: "#81888f",
    fontWeight: "900",
    fontSize: 14,
  },

  cardTaskDescriptionNone: {
    justifyContent: "center",
    paddingHorizontal: 25,
    minHeight: 60,
    marginBottom: 20,
    backgroundColor: "#d6e2ef",
    borderRadius: 20,
  },
});

export default styles;
