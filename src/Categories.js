import react, {useState, useEffect} from "react";
import axios from "axios";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

const Categories = (props) => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = async() => {
        setIsLoading(true)
        await axios.get('https://api.pokemontcg.io/v2/cards')
        .then(res => {
            setPokemons(res.data.data)
            setIsLoading(false)
        })
        .catch(err => {
            console.log(err.message);
            setIsLoading(false)
        })
    }
    useEffect(() => {
        loadData()
    },[])


  return (
    <ScrollView>
    <View style={styles.container}>
        {
            isLoading 
            ? (<>
                <ActivityIndicator size='large' color='#ffffff' />
            </>) 
            : (<>
                {
                    pokemons.length > 0 && (<>
                    {
                        pokemons.map(pokemon => 
                            <TouchableOpacity
                                onPress={() => {props.navigation.navigate("products", {pokemon})}}
                                key={pokemon.id} 
                                style={styles.row}>
                                <Text>{pokemon.name}</Text>
                            </TouchableOpacity>)
                    }
                    </>)
                }
            </>)
        }
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

    row:{
        width:'100%',
        borderRadius:10,
        backgroundColor:'#ffffff',
        padding:12,
        marginBottom:12
    },

  container: {
    backgroundColor: "#00cc99",
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    padding: 30,
  },
});

export default Categories;
