import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import * as SplashScreen from 'expo-splash-screen';

import './styles/global.css';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeHeader } from './components/HomeHeader';
import { DateSwitcher } from './components/DateSwitcher';
import { DailyStats } from './components/DailyStats';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-1 bg-white">
      <SafeAreaProvider>
        <HomeHeader />
        <DateSwitcher />
        <DailyStats
          calories={{
            current: 1100,
            goal: 2500,
          }}
          proteins={{
            current: 1500,
            goal: 2500,
          }}
          carbohydrates={{
            current: 2000,
            goal: 2500,
          }}
          fats={{
            current: 600,
            goal: 2500,
          }}
        />
      </SafeAreaProvider>
    </View>
  );
}
