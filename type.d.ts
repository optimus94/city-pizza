import { ImageSourcePropType } from "react-native";

interface CustomInputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  includeFontPadding?: boolean;
  style?: any;
}

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  icon?: any;
  containerClassName?: string;
  textClassName?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
}

interface SignInParams {
  email: string;
  password: string;
}

interface CartItemParams {
  id: number;
  variantId: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}