import react from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Products = (props) => {

    const poke = props.route.params.pokemon;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{poke.name}</Text>
      <Text style={styles.title}>{poke.level}</Text>
      <Text style={styles.title}>{poke.hp}</Text>
      <Image style={styles.image} source={{uri: poke.images.large}} />
    </View>
  );
};

const styles = StyleSheet.create({
    image: {width:200, height:300},
  btn: {
    width: "100%",
    marginTop: 12,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#000000",
  },
  btn_text: { color: "#ffffff", fontSize: 20, fontWeight: "200" },
  container: {
    backgroundColor: "#cc0099",
    flex: 1,
    padding:30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "200",
  },
});

export default Products;
