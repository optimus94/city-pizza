import { ImageSourcePropType } from "react-native";
import { Models } from "react-native-appwrite";

export interface User extends Models.Document {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $sequence: number;
  name: string;
  email: string;
}

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

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}
