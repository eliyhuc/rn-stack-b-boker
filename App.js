import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
