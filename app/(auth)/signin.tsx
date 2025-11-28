import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CustomInput from "@/components/CustomInput";
import PrimaryButton from "@/components/PrimaryButton";
import { icons, images } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid
        extraScrollHeight={Platform.OS === "android" ? 100 : 0}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="flex-1 w-full px-4">
          {/* Top / Main Content */}
          <View className="flex-1 justify-center items-center gap-8">
            {/* Logo Section */}
            <Image source={images.brandLogoAlt} resizeMode="contain" />

            {/* Intro Text */}
            <View className="gap-3">
              <Text className="text-2xl text-center text-grey-default font-clashdisplay-bold">
                Welcome to CityPizza!
              </Text>

              <Text className="text-lg text-center text-grey-300 font-manrope-regular">
                Any Pizza, Anytime. Handcrafted and always delicious.
              </Text>
            </View>

            {/* Input Fields */}
            <View className="w-full gap-4">
              <CustomInput
                label="Email"
                placeholder="Enter your email"
                value={form.email}
                keyboardType="email-address"
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, email: text }))
                }
              />

              <CustomInput
                label="Password"
                placeholder="Enter your password"
                value={form.password}
                secureTextEntry
                onChangeText={(text) =>
                  setForm((prev) => ({ ...prev, password: text }))
                }
              />

              <PrimaryButton
                label="Sign In"
                icon={icons.secured}
                onPress={() => router.push("/")}
              />
            </View>

            {/* Divider */}
            <View className="flex-row items-center gap-2">
              <View className="flex-1 h-[1px] bg-red-100" />
              <Text className="mx-4 text-xl text-grey-300 font-manrope-medium">
                Or Continue With
              </Text>
              <View className="flex-1 h-[1px] bg-red-100" />
            </View>

            {/* Google Sign In */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => console.log("Google Login Pressed")}
              className="w-full bg-natural-white p-1 rounded-3xl border border-red-100"
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={icons.googleIcon}
                  resizeMode="contain"
                  className="w-[56px] h-[56px]"
                />
                <Text className="text-grey-default text-lg font-manrope-bold">
                  Sign In with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Bottom Section */}
          <View className="items-center pb-6">
            <Text className="text-lg text-grey-300 font-manrope-bold">
              Don’t an account?{" "}
              <Text
                onPress={() => router.replace("./signup")}
                className="text-red-default font-manrope-bold"
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
