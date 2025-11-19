import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { cn } from '../utils/cn';

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
  ...props
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
      <View className="gap-2 flex-row">
        <TextInput
          className={cn(
            'h-[52px] p-3.5 flex-1 border boder-gray-400 rounded-[10px] text-black-700 focus:border-black-700',
            !!error && 'border-support-red',
            className
          )}
          value={mask ? maskedValue : props.value}
        />
      </View>
    </View>
  );
}
