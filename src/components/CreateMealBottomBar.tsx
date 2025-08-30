import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CreateMealBottomBar() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="absolute bg-white z-10 w-full bottom-0 border-t border-gray-400"
      style={{ height: 80 + bottom }}
    >
      <Text>Criar</Text>
    </View>
  );
}
