import { TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogOutIcon } from "lucide-react-native";

export function HomeHeader() {
    return (
        <View className="bg-lime-400 h-[130px]">
            <SafeAreaView className="px-4 flex-row items-center justify-between">
                <View className="px-4">
                    <Text className="text-gray-700 text-sm font-sans-regular">Olá, </Text>
                    <Text className="text-black-700 text-base font-sans-semibold">Renan</Text>
                </View>

                <TouchableOpacity className="size-12 items-center justify-center">
                    <LogOutIcon />
                </TouchableOpacity> 
            </SafeAreaView>
        </View>
    );
}