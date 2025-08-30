import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { cn } from '../utils/cn';

interface IArcProps {
  percentage: number;
  color: string;
  radius: number;
  strokeWidth: number;
  className?: string;
}

function Arc({ percentage, color, radius, strokeWidth, className }: IArcProps) {
  const semiCircumference = Math.PI * radius;
  const arcLength = (percentage / 100) * semiCircumference;

  const arcDraw = `M  ${strokeWidth / 2}, ${radius + strokeWidth / 2}
                    A ${radius},${radius} 0 0,1 ${radius * 2 + strokeWidth / 2},${radius + strokeWidth / 2}`;

  return (
    <View className={cn(className)}>
      <Svg width={radius * 2 + strokeWidth} height={radius + strokeWidth}>
        <Path
          d={arcDraw}
          fill="none"
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          strokeDasharray={semiCircumference}
          strokeLinecap="round"
        />
        <Path
          d={arcDraw}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={[arcLength, semiCircumference]}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

type MacroProgress = {
  goal: number;
  current: number;
};

interface IGoalArcsProps {
  calories: MacroProgress;
  proteins: MacroProgress;
  carbohydrates: MacroProgress;
  fats: MacroProgress;
}

export function DailyStats({
  calories,
  carbohydrates,
  fats,
  proteins,
}: IGoalArcsProps) {
  return (
    <View className="items-center justify-center">
      <View className="items-center relative min-h-[172px]">
        <Arc
          percentage={calcMacroPercentage(calories)}
          color="#FF5736"
          radius={160}
          strokeWidth={12}
        ></Arc>
        <Arc
          percentage={calcMacroPercentage(proteins)}
          color="#2A9D90"
          radius={140}
          strokeWidth={12}
          className="absolute top-[20]"
        ></Arc>
        <Arc
          percentage={calcMacroPercentage(carbohydrates)}
          color="#E8C468"
          radius={120}
          strokeWidth={12}
          className="absolute top-[40]"
        ></Arc>
        <Arc
          percentage={calcMacroPercentage(fats)}
          color="#4CAF50"
          radius={100}
          strokeWidth={12}
          className="absolute top-[60]"
        ></Arc>

        <View className="-mt-16 items-center justify-center">
          <Text>
            <Text className="font-sans-bold text-support-tomato text-xl">
              {Math.round(calories.current)}
            </Text>
            <Text className="text-base text-gray-700"> / {calories.goal}</Text>
          </Text>
          <Text className="text-gray-700 mt-1 text-center font-sans-regular text-sm">
            Calorias
          </Text>
        </View>
      </View>

      <View className="p-4 w-full flex-row items-center justify-between">
        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-teal text-base">
            {Math.round(proteins.current)}
            <Text className="text-sm text-gray-700"> / {proteins.goal}</Text>
          </Text>
          <Text className="text-sm text-gray-700">Proteínas</Text>
        </View>

        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-yellow text-base">
            {Math.round(carbohydrates.current)}
            <Text className="text-sm text-gray-700">
              {' '}
              / {carbohydrates.goal}
            </Text>
          </Text>
          <Text className="text-sm text-gray-700">Carboidratos</Text>
        </View>

        <View className="items-center w-1/3 justify-center">
          <Text className="font-sans-bold text-support-orange text-base">
            {Math.round(fats.current)}
            <Text className="text-sm text-gray-700"> / {fats.goal}</Text>
          </Text>
          <Text className="text-sm text-gray-700">Gorduras</Text>
        </View>
      </View>
    </View>
  );
}

function calcMacroPercentage({ goal, current }: MacroProgress) {
  const percentage = (current / goal) * 100;
  return Math.min(percentage, 100);
}
