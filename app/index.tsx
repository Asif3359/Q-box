import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constant/colors";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("../assets/images/landing.jpg")}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "cover",
        }}
      />

      <View
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "bold", color: Colors.WHITE, marginBottom: 10 }}>
          Welcome to Qbox
        </Text>

        {/* <Text style={{ fontSize: 18, color: Colors.WHITE, marginBottom: 5 }}>
          An Inventory Management Solution
        </Text> */}

        <Text style={{ fontSize: 14, color: Colors.WHITE, textAlign: "center", marginBottom: 60 }}>
          Keep track of your inventory stock easily and efficiently.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.WHITE,
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 8,
          }}
          onPress={() => router.push({ pathname: "/home" })}
        >
          <Text style={{ color: Colors.PRIMARY, fontSize: 16, fontWeight: "bold" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
