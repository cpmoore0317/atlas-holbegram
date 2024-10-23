import { Pressable, Text, View, Image } from "react-native";
import { Colors } from "../Colors";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
      }}
    >
      <Image
        source={require("@/assets/images/cover-art.png")}
        style={{ width: 300, height: 300, resizeMode: "contain", borderRadius: 14 }}
      />
      <Pressable
        style={{
          width: "80%",
          padding: 14,
          backgroundColor: Colors.teal,
          borderRadius: 7,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Choose a photo</Text>
      </Pressable>
    </View>
  );
}
