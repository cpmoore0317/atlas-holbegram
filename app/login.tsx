import { Link, useRouter } from "expo-router";
import { Text, View, Pressable, Image, } from "react-native";

import { Colors } from "./Colors";
export default function Page() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: Colors.blue }}>
      <Image
          source={require('@/assets/images/atlas-logo.png')}
        />
      <Text>Login</Text>
      <Link href="/register" replace>
        <Text>Create a new account</Text>
      </Link>

      <Pressable
        onPress={() => {
          router.replace("/(tabs)/");
        }}
      >
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}
