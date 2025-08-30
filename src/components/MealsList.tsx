import { FlatList, View, Text } from 'react-native';
import { MealCard } from './MealCard';
import { DateSwitcher } from './DateSwitcher';
import { DailyStats } from './DailyStats';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const meals = [
  {
    id: String(Math.random()),
    name: 'Café da manhã',
  },
  {
    id: String(Math.random()),
    name: 'Almoço',
  },
  {
    id: String(Math.random()),
    name: 'Janta',
  },
  {
    id: String(Math.random()),
    name: 'Café da manhã',
  },
  {
    id: String(Math.random()),
    name: 'Almoço',
  },
  {
    id: String(Math.random()),
    name: 'Janta',
  },
];

function MealsListHeader() {
  return (
    <View>
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
      <View className="h-px bg-gray-200 mt-7"></View>
      <Text className="text-black-700 m-5 text-base font-sans-medium tracking-[1.28px]">
        REFEIÇÕES
      </Text>
    </View>
  );
}

function Separator() {
  return <View className="h-8" />;
}

export function MealsList() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="p-5">
      <View className="mt-4">
        <FlatList
          data={meals}
          contentContainerStyle={{ marginBottom: 80 + bottom + 16 }}
          contentContainerClassName="gap-8 px-5"
          keyExtractor={meal => meal.id}
          ListHeaderComponent={MealsListHeader}
          ItemSeparatorComponent={Separator}
          renderItem={({ item: meal }) => (
            <View className="mx-5">
              <MealCard id={meal.id} name={meal.name} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
