// import React, { useEffect, useState, useCallback } from "react";
// import * as SplashScreen from "expo-splash-screen";
// import { View, Image, StyleSheet } from "react-native";

// SplashScreen.preventAutoHideAsync();

// const SplashSCreenView = () => {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <Image
//         style={styles.image}
//         source={require("../../assets/img/notesApp-logo.png")}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 200,
//     height: 200,
//     resizeMode: "contain",
//   },
// });

// export default SplashSCreenView;
