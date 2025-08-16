import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HostGrotesk_400Regular, HostGrotesk_500Medium, HostGrotesk_600SemiBold, HostGrotesk_700Bold, useFonts } from '@expo-google-fonts/host-grotesk';
import * as SplashScreen from 'expo-splash-screen';

import './styles/global.css';

SplashScreen
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-lime-500">
      <Text className='text-base'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

