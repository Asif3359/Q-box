import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { Text, TouchableOpacity, View } from "react-native";
import { auth } from "../config/firebaseconfig";
import Colors from "../constant/colors";


export default function AdminPanel() {
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.replace("/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.WHITE }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: Colors.SECONDARY, marginBottom: 20 }}>
        Welcome Admin
      </Text>

      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 12,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: Colors.WHITE, fontWeight: "bold" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
