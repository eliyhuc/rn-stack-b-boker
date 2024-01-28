//IMPORT NATIVE STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//IMPORT THE STACK COMPONENTS
import Categories from './Categories'
import Products from './Products'
import ProductInfo from './ProductInfo'

const AppStackNavigator = createNativeStackNavigator();

export const AppStack = () => {
    return(
        <AppStackNavigator.Navigator>
            <AppStackNavigator.Screen name='categories' component={Categories} />
            <AppStackNavigator.Screen name='products' component={Products} />
            <AppStackNavigator.Screen name='productInfo' component={ProductInfo} />
        </AppStackNavigator.Navigator>
    )
}