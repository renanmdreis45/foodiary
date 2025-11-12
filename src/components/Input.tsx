import { useState } from 'react';
import { Text, View } from 'react-native';

interface IInputProps extends React.ComponentProps<typeof TextInput> {
  mask?: string;
  label?: string;
  append?: string;
  error?: string;
}

export function Input({
  className,
  mask,
  onChangeText,
  label,
  append,
  error,
}: IInputProps) {
  const [maskedValue, setMaskedValue] = useState('');

  function handleChangeText(text: string) {
    const value = mask ? applyMask(text, mask) : text;

    setMaskedValue(value);
    onChangeText?.(value);
  }

  return (
    <View className="gap-2">
      {label && (
        <Text className="text-base font-sans-medium to-black-700">{label}</Text>
      )}
    </View>
  );
}
