import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './src/Navigation';
import Login from './src/Login';

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
}
