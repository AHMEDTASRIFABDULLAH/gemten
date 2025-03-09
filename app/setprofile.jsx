import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyles from "../globalcss/styles";
import profileIcon from "../assets/login_icons/profile_Icon.png";
import uploadBox from "../assets/login_icons/upload_box.png";
import btnSmallIcon from "../assets/login_icons/btn_small-icon.png";
import { useNavigation } from "expo-router";
const SetProfile = () => {
  const navigation = useNavigation();
  const handelNavigate = () => {
    navigation.navigate("setprofile");
  };
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={globalStyles.topViewColor}></View>
      <View style={globalStyles.container}>
        {/* progressBar Start */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progress}>
            <View style={styles.progressChaild}></View>
          </View>
        </View>
        {/*  title text  */}
        <Text style={styles.titleText}>Select a profile photo</Text>
        <View style={styles.imageContainer}>
          <Image source={profileIcon} />
        </View>
        <View style={styles.uploadImageContainer}>
          <Image source={uploadBox} />
        </View>
        {/* button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handelNavigate} style={styles.nextButton}>
            <Text style={styles.buttonText}>Done</Text>
            {/* <Image source={btnIcon} /> */}
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.buttonText}>Skip</Text>
            <Image style={styles.smallbtnImage} source={btnSmallIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // progressBar Start
  progressBarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    borderColor: "#3391FC",
    height: "17",
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 26,
    padding: 2,
    backgroundColor: "#D9D9D9",
  },
  progressChaild: {
    width: "100%",
    backgroundColor: "#76AEEE",
    height: "100%",
    borderRadius: 12,
  },
  //  title text
  titleText: {
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    paddingTop: 32,
    paddingBottom: 10,
    textAlign: "center",
  },
  //   image container
  imageContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  uploadImageContainer: {
    alignItems: "center",
    marginTop: 54,
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 200,
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
  smallbtnImage: {
    marginTop: 4,
  },
  skipButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 19,
    marginLeft: 15,
  },
});
export default SetProfile;
