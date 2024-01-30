import react from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductInfo = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#99cc00",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "200",
  },
});



export const screenOption = () => {
  return {
      headerTitle: 'Product Info'
  }
}


export default ProductInfo;
