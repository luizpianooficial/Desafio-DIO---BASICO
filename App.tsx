import { StatusBar } from 'expo-status-bar';
import Inicio from './src/screens/Inicio';
import Routes from './src/Routes';
import {NavigationContainer}  from '@react-navigation/native'


export default function App() {
  return (
    
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>


  );
}
