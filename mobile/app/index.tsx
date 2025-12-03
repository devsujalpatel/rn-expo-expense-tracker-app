import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E6F4FE",
      }}
    >
      <Text
        style={{
          color: "blue",
        }}
      >
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/about">About</Link>
      {/* <Image
        source={{
          uri: "https://images.unsplash.com/photo-1764703495149-f09b0aa607c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        }}
        style={{ width: 200, height: 200 }}
      /> */}
      <Image 
      source={require("@/assets/images/icon.png")}
      style={{ width: 200, height: 200 }}
      />

      <View>
        <Text>
          Hello
        </Text>
      </View>
    </View>
  );
}
