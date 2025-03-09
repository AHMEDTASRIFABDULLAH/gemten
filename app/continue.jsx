import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyles from "../globalcss/styles";
import profileImg from "../assets/login_icons/profile_image.png";
const Continue = () => {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.topViewColor}></View>
      <View style={globalStyles.container}>
        <View style={styles.profileContainer}>
          <Image source={profileImg} />
          <Text style={styles.userName}>@xarolex </Text>
        </View>
        {/* button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 103,
  },
  userName: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: 25,
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 135,
    borderRadius: 77,
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#3391FC",
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 600,
    color: "#000000",
  },
});
export default Continue;
