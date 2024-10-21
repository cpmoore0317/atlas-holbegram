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
        style={{ width: 300, height: 300, resizeMode: "contain" }}
      />
      <Text style={{ color: "white" }}>Login</Text>
      <Link href="/register" replace>
        <Text style={{ color: "white" }}>Create a new account</Text>
      </Link>

      <Pressable
        onPress={() => {
          router.replace("/(tabs)/");
        }}
      >
        <Text style={{ color: "white" }}>Sign In</Text>
      </Pressable>
    </View>
  );
}
