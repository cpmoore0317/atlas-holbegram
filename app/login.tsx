import { Link, useRouter } from "expo-router";
import { Text, View, Pressable, Image, TextInput } from "react-native";

import { Colors } from "./Colors";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#CCCCCC"
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: Colors.teal,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 5,
        }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
        style={{
          width: "80%",
          padding: 10,
          borderWidth: 1,
          borderColor: Colors.teal,
          borderRadius: 5,
          marginTop: 5,
          marginBottom: 10,
        }}
        secureTextEntry
      />
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
