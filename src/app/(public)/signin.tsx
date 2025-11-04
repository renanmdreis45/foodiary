import { Input } from 'postcss';
import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  return (
    <AuthLayout>
      <View>
        <Input label="password" secureTextEntry />
      </View>
    </AuthLayout>
  );
}
