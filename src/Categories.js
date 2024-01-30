import react, {useState, useEffect} from "react";
import axios from "axios";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity, 
    FlatList,
    ActivityIndicator } from "react-native";

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
    <View style={styles.container}>
        {
            isLoading 
            ? (<>
                <ActivityIndicator size='large' color='#ffffff' />
            </>) 
            : (<>
                <FlatList style={{width:'100%'}}
                    data={pokemons}
                    keyExtractor={item => item.id}
                    renderItem={itemRow => 
                    <TouchableOpacity 
                        onPress={() => {props.navigation.navigate("products", 
                            {pokemon: itemRow.item})}} style={styles.row}>
                        <Text>{itemRow.item.name}</Text>
                    </TouchableOpacity>}
                />
            </>)
        }
    </View>
  );
};


export const screenOption = (navData) => {
    return {
        headerTitle: 'Pokemons',
        headerRight: () => (<Ionicons onPress={() =>
             {navData.navigation.navigate("productInfo")}} 
             name="chatbubble-ellipses-outline" size={30} color='#ffffff' />)
    }
}


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
