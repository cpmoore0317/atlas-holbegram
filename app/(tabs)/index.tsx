import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Colors } from "../Colors";
import firestore from "@/lib/firestore"; // This refers to your Firestore handler
import { collection, getDocs, query, orderBy } from "firebase/firestore"; // Firestore methods
import { db } from "@/firebaseConfig"; // Correct Firestore db import
import { useAuth } from "@/components/AuthProvider";

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);
  const auth = useAuth();

  // Fetch all posts (images and descriptions) from Firestore
  useEffect(() => {
    async function fetchPosts() {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const postData = querySnapshot.docs.map((doc) => doc.data());
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        padding: 20,
      }}
    >
      {/* Loop through posts and render each image */}
      {posts.map((post, index) => (
        <View key={index} style={styles.postContainer}>
          <Image
            source={{ uri: post.image }}
            style={styles.image}
          />
          <Text style={styles.description}>{post.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  image: {
    width: 300,
    height: 300, // Ensure the image is square
    borderRadius: 14,
    resizeMode: "cover",
    backgroundColor: "#ddd", // Placeholder while image loads
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.teal,
  },
});
