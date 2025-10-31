import { View, Text, ImageBackground } from 'react-native';

export default function SignIn() {
  return (
    <ImageBackground
      source={require('../../assets/onboarding_bg.png')}
      className="flex-1"
    >
      <Text>Entrar</Text>
      <Text>Criar conta</Text>
    </ImageBackground>
  );
}
