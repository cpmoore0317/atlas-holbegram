import { Pressable, Text, View, Image, TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "../Colors";
import { useImagePicker } from "@/hooks/useImagePicker";

export default function Page() {
  const { image, openImagePicker, reset } = useImagePicker();
  const [description, setDescription] = useState(""); // To track the description
  const [isPhotoSelected, setIsPhotoSelected] = useState(false); // To toggle between button states

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        padding: 20,
      }}
    >
      <Image
        source={image ? { uri: image } : require("@/assets/images/cover-art.png")}
        style={{ width: 300, height: 300, resizeMode: "contain", borderRadius: 14 }}
      />

      {isPhotoSelected && (
        <TextInput
          placeholder="Enter a description..."
          value={description}
          onChangeText={setDescription}
          style={{
            width: "80%",
            padding: 10,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 7,
            marginTop: 20,
          }}
        />
      )}

      <Pressable
        onPress={() => {
          if (isPhotoSelected) {
            alert(`Image saved with description: ${description}`);
          } else {
            openImagePicker().then(() => setIsPhotoSelected(true));
          }
        }}
        style={{
          width: "80%",
          padding: 14,
          backgroundColor: Colors.teal,
          borderRadius: 7,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          {isPhotoSelected ? "Save" : "Choose a photo"}
        </Text>
      </Pressable>

      {isPhotoSelected && (
        <Pressable
          onPress={() => {
            reset();
            setIsPhotoSelected(false);
            setDescription("");
          }}
          style={{
            width: "80%",
            padding: 14,
            backgroundColor: Colors.teal,
            borderRadius: 7,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Reset</Text>
        </Pressable>
      )}
    </View>
  );
}
