import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../../constant/colors";
import { auth } from "../firebase"; // adjust if your path is different

export default function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/customer"); // go to customer panel
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.WHITE, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30, color: Colors.SECONDARY }}>
        Customer Login
      </Text>

      <TextInput
        placeholder="Email"
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
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
