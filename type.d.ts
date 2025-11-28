interface CustomInputProps {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
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
}