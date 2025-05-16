import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons
import Colors from "../constant/colors";

export default function Home() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.WHITE }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 30 }}>Inventory</Text>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Log in as</Text>

            <View style={{ flexDirection: "row", marginBottom: 40 }}>
                {/* Admin Panel Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.SECONDARY,
                        paddingVertical: 20,
                        width: 150, // Set a fixed width
                        borderRadius: 10,
                        margin: 10,
                        alignItems: "center",
                    }}
                    onPress={() => router.push("auth/admin-login")}
                >
                    <Animatable.View animation="bounceIn" duration={1500} delay={200}>
                        <Icon name="admin-panel-settings" size={50} color={Colors.WHITE} />
                    </Animatable.View>

                    <Text style={{ color: Colors.WHITE, fontSize: 16, marginTop: 10 }}>Admin </Text>
                </TouchableOpacity>

                {/* Customer Panel Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: Colors.SECONDARY, // Using secondary color here
                        paddingVertical: 20,
                        width: 150, // Set the same fixed width
                        borderRadius: 10,
                        margin: 10,
                        alignItems: "center",
                    }}
                    onPress={() => router.push("auth/customer-login")}
                >
                    <Animatable.View animation="bounceIn" duration={1500} delay={400}>
                        <Icon name="storefront" size={50} color={Colors.WHITE} />
                    </Animatable.View>

                    <Text style={{ color: Colors.WHITE, fontSize: 16, marginTop: 10 }}>Customer </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
