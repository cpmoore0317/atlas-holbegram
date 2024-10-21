import { Link, useRouter } from "expo-router";
import { Text, View, Pressable, Image } from "react-native";

import { Colors } from "./Colors";

export default function Page() {
  const router = useRouter();
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
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        Login
      </Text>
      <Pressable
        onPress={() => {
          router.replace("/(tabs)/");
        }}
      >
        <Text style={{ color: "white" }}>Sign In</Text>
      </Pressable>
      <Link href="/register" replace>
        <Text style={{ color: "white" }}>Create a new account</Text>
      </Link>
    </View>
  );
}
