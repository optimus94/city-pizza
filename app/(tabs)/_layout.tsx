import { icons } from "@/constants";
import { TabBarIconProps } from "@/type";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Image, Platform, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TabBarIcon = ({ focused, icon }: TabBarIconProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(focused ? 1.1 : 1, { duration: 200 }),
      },
    ],
  }));
  return (
    <View
      className={`tab-icon ${
        focused ? "bg-natural-white rounded-full" : ""
      } justify-center items-center`}
    >
      <Animated.View style={animatedStyle}>
        <Image
          source={icon}
          className="size-8"
          resizeMode="contain"
          tintColor={focused ? "#B70F0A" : "null"}
        />
      </Animated.View>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 16,
          height: 80,
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          overflow: "hidden", // clip blur to rounded corners
          elevation: 0, // android z
          backgroundColor: "transparent", // must be transparent
          justifyContent: "center",
          alignSelf: "center",
          borderTopWidth: 0,
        },

        // Render BlurView as the tab bar background
        tabBarBackground: () => (
          // wrapper view ensures flex:1 coverage and allows overlay color
          <View style={{ flex: 1 }}>
            <BlurView
              intensity={16}
              tint="light" // 'light' | 'dark' | 'default'
              style={{
                flex: 1,
                ...Platform.select({
                  ios: { backgroundColor: "rgba(233,181,179,0.40)" },
                  android: { backgroundColor: "rgba(233, 181, 179, 1.00)" },
                }),
              }}
            ></BlurView>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.homeIcon} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="locations"
        options={{
          title: "Locations",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.mapIcon} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.cartIcon} focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.profileIcon} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
