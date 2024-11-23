import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>index</Text>
      <Link href="/sign-in" style={{ color: 'blue' }}>Go to sign-in</Link>
    </View>
  )
}

export default App

// import { StatusBar } from "expo-status-bar";
// import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import images from "../constants/images";
// import CustomButton from "../components/CustomButton";
// import { Link } from "expo-router";

// const { width, height } = Dimensions.get("window");

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollContainer}
//         showsVerticalScrollIndicator={false} // Hides scroll indicator
//       >
//         <Image source={images.logo} style={styles.logo} resizeMode="contain" />

//         <Image source={images.cards} style={styles.cards} resizeMode="contain" />

//         <View style={styles.textContainer}>
//           <Text style={styles.mainText}>
//             Discover Endless{"\n"}
//             Possibilities with{" "}
//             <Text style={styles.highlightedText}>Aora</Text>
//           </Text>

//           <Image
//             source={images.path}
//             style={styles.path}
//             resizeMode="contain"
//           />
//         </View>

//         <Text style={styles.description}>
//           Where Creativity Meets Innovation: Embark on a Journey of Limitless
//           Exploration with Aora
//         </Text>

//         <CustomButton
//           title="Continue with Email"
//           handlePress={() => router.push("/sign-in")}
//           containerStyles={styles.buttonContainer}
//         />
//       </ScrollView>

//       <StatusBar backgroundColor="#161622" style="light" />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#161622", // Background color
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16, // Matches Tailwind `px-4`
//     paddingBottom: 20, // Adds padding to prevent content clipping
//   },
//   logo: {
//     width: width * 0.4, // Dynamically scale width (40% of screen)
//     height: height * 0.1, // Dynamically scale height (10% of screen)
//     marginBottom: 20, // Adds spacing
//   },
//   cards: {
//     width: width * 0.9, // Scale to 90% of screen width
//     height: height * 0.3, // Scale to 30% of screen height
//     marginBottom: 20, // Adds spacing
//   },
//   textContainer: {
//     marginTop: 20,
//     alignItems: "center",
//     position: "relative",
//   },
//   mainText: {
//     fontSize: 24, // Matches Tailwind `text-3xl`
//     color: "white", // Matches Tailwind `text-white`
//     fontWeight: "bold", // Matches Tailwind `font-bold`
//     textAlign: "center", // Matches Tailwind `text-center`
//   },
//   highlightedText: {
//     color: "#FFA001", // Matches Tailwind `text-secondary-200`
//   },
//   path: {
//     width: width * 0.3, // Scale width dynamically
//     height: height * 0.02, // Scale height dynamically
//     position: "absolute",
//     bottom: -8,
//     right: -32,
//   },
//   description: {
//     fontSize: 14,
//     color: "#CDCDE0", // Matches Tailwind `text-gray-100`
//     marginTop: 28, // Adds spacing
//     textAlign: "center",
//   },
//   buttonContainer: {
//     width: "100%",
//     marginTop: 28,
//   },
// });

// export default App;
