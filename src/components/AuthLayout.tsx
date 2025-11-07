import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IAuthLayoutProps {
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthLayout({
  icon,
  title,
  subtitle,
  children,
}: IAuthLayoutProps) {
  return <View></View>;
}
