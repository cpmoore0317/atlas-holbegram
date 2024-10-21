import { Link } from "expo-router";
import { Text, View, Image } from "react-native";

import { Colors } from "./Colors";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
      }}
    >
      <Image
        source={require("@/assets/images/atlas-logo.png")}
        style={{ width: 200, height: 200, resizeMode: "contain" }}
      />
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Register</Text>
      <Link href="/login" replace>
        <Text style={{ color: "white" }}>Log in to an existing account</Text>
      </Link>
    </View>
  );
}
