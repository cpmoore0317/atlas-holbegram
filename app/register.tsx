import { Link } from "expo-router";
import { Text, View, Image, TextInput } from "react-native";

import { Colors } from "./Colors";
import { useState } from "react";

export default function Page() {
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
        Register
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
          borderColor: Colors.blueLight,
          backgroundColor: "white",
          borderRadius: 5,
          marginTop: 5,
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
          borderColor: Colors.blueLight,
          backgroundColor: "white",
          borderRadius: 5,
          marginTop: 5,
        }}
        secureTextEntry
      />
      <Text style={{ color: "white" }}>Create Account</Text>
      <Link href="/login" replace>
        <Text style={{ color: "white" }}>Log in to an existing account</Text>
      </Link>
    </View>
  );
}
