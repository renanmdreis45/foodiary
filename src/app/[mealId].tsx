import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Page() {
  const { mealId } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Detalhes da refeição: {mealId}</Text>
    </View>
  );
}
