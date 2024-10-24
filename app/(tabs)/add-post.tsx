import { Pressable, Text, View, Image, TextInput } from "react-native";
import { useState } from "react";
import { Colors } from "../Colors";
import { useImagePicker } from "@/hooks/useImagePicker";
import storage from "@/lib/storage";
import firestore from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export default function Page() {
  const { image, openImagePicker, setImage } = useImagePicker();
  const [description, setDescription] = useState("");
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const auth = useAuth();

  async function save() {
    if (image) {
      const name = image.split("/").pop() as string;
      const { downloadUrl, metadata } = await storage.upload(image, name);
      console.log(downloadUrl);
      firestore.addPost({
        description,
        image: downloadUrl,
        createdAt: new Date(),
        createdBy: auth.user?.uid!!,
      });
    } else {
      console.error("No image selected.");
    }
  }

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
            save();
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
            setIsPhotoSelected(false);
            setDescription("");
            setImage(undefined);
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
