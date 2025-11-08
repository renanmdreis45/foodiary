import { Input } from 'postcss';
import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthLayout } from '../../components/AuthLayout';

export default function SignIn() {
  return (
    <AuthLayout
      icon="👤"
      title="Entre em sua conta"
      subtitle="Acesse sua conta para continuar"
    >
      <View></View>
    </AuthLayout>
  );
}
