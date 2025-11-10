import { TextInput } from 'react-native';

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
  return <></>;
}
