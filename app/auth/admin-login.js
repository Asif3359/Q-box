import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../../config/firebaseconfig";
import Colors from "../../constant/colors";

const ADMIN_EMAIL = "admin@qbox.com"; // the email you created in Firebase

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email !== ADMIN_EMAIL) {
        Alert.alert("Access Denied", "You are not the admin.");
        return;
      }

      router.replace("/admin"); // Admin panel
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.WHITE, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30, color: Colors.SECONDARY }}>
        Admin Login
      </Text>

      <TextInput
        placeholder="Admin Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{
          width: "100%",
          padding: 12,
          borderWidth: 1,
          borderColor: Colors.SECONDARY,
          borderRadius: 8,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          width: "100%",
          padding: 12,
          borderWidth: 1,
          borderColor: Colors.SECONDARY,
          borderRadius: 8,
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          paddingVertical: 12,
          borderRadius: 8,
          width: "100%",
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: Colors.WHITE, fontSize: 16, fontWeight: "bold" }}>
          Loginnn
        </Text>
      </TouchableOpacity>
    </View>
  );
}
