import { images } from "@/constants";
import { getCurrentUser } from "@/lib/auth";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const HeaderBar = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [address, isAddress] = useState<string>("Fetching Address...");
  const screenWidth = Dimensions.get("window").width;

  {
    /* Fetching Username */
  }
  useEffect(() => {
    let mounted = true;
    getCurrentUser().then((user: any) => {
      if (mounted && user && (user as any).name)
        setUserName((user as any).name);
    });
    return () => {
      mounted = false;
    };
  }, []);

  {
    /* Fetching Current Location */
  }

  const fetchLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        isAddress("Current Location");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode.length > 0) {
        const place = geocode[0];

        const formattedAddress =
          place.streetNumber && place.street
            ? `${place.streetNumber} ${place.street}`
            : place.name || place.street || place.district || place.city;
        isAddress(`${formattedAddress}, ${place.city}, ${place.region}`);
      }
    } catch (error) {
      console.log("Location Error", error);
      isAddress("Location Unavailable");
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <View className="header-bar">
      <View className="header-left">
        <Image source={images.brand} className="size-14" />
        <View className="flex-start mr-2">
          <Text className="header-greeting">
            {userName ? `Welcome, ${userName}` : "Welcome!"}
          </Text>
          <TouchableOpacity activeOpacity={0.85} onPress={fetchLocation}>
            <Text
              className="header-address"
              style={{ width: screenWidth * 0.5 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {address || "Fetching Address..."}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.85} className="header-cta">
          <Text className="header-cta-text">ASAP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;
