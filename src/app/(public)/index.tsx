import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Link } from 'expo-router';

export default function SignIn() {
  return (
    <ImageBackground
      source={require('../../assets/onboarding_bg.png')}
      className="flex-1"
    >
      <SafeAreaView>
        <View className="bg-red-500 flex-1 items-center justify-between">
          <View className="w-full items-center">
            <Text className="font-sans-semibold text-[32px] text-white w-[311px] text-center">
              Controle sua dieta de forma simples
            </Text>
            <View className="p-5 w-full mt-6">
              <Link href="/signup" asChild>
                <Button className="w-full">Criar conta</Button>
              </Link>
              <View className="mt-[30px] flex-row items-center gap-2 justify-center">
                <Text className="text-white font-sans-regular text-base">
                  Já tem conta?
                </Text>
                <Link href="/signin">
                  <Text className="text-lime-500 font-sans-medium text-base">
                    Acesse agora!
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
