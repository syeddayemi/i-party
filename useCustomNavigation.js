import { useNavigation } from '@react-navigation/native';

export const useCustomNavigation = () => {
  const navigation = useNavigation();
  return navigation;
};