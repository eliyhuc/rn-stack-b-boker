//IMPORT NATIVE STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//IMPORT THE STACK COMPONENTS
import Categories, {screenOption as CategoriesScreenOption} from './Categories'
import Products, {screenOption as ProductsScreenOption} from './Products'
import ProductInfo, {screenOption as ProductInfoScreenOption} from './ProductInfo'

import { Platform } from 'react-native';

const defaultNavOptions = {
    headerStyle: {backgroundColor: Platform.OS === 'android' ? '#000000' : '#ffcc00'},
    headerTintColor: '#ffffff',
    headerTitleAlign: 'center'
}

const AppStackNavigator = createNativeStackNavigator();

export const AppStack = () => {
    return(
        <AppStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AppStackNavigator.Screen name='categories' component={Categories} options={CategoriesScreenOption} />
            <AppStackNavigator.Screen name='products' component={Products} options={ProductsScreenOption} />
            <AppStackNavigator.Screen name='productInfo' component={ProductInfo} options={ProductInfoScreenOption} />
        </AppStackNavigator.Navigator>
    )
}