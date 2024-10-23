import { Pressable, Text, View } from "react-native";
import { Colors } from "../Colors";

export default function Page() {
    return <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F2F2F2"}}>
        <Pressable
        style={{
          width: "80%",
          padding: 10,
          backgroundColor: Colors.teal,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Upload Photo</Text>
      </Pressable>
    </View>
}
