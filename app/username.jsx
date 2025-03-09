import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import globalStyles from "../globalcss/styles";
import btnIcon from "../assets/login_icons/icon.png";
import { useNavigation } from "expo-router";
const UserName = () => {
  const navigation = useNavigation();
  const handelNavigate = () => {
    navigation.navigate("password");
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
        {/* input title text  */}
        <Text style={styles.inputTitleText}>Select your username</Text>
        <View style={styles.userNameInputContainer}>
          <Text style={styles.inputText}>Username</Text>
          <TextInput placeholder="@" style={styles.useNameInput} />
          <Text style={styles.exampleName}>example: @yuki_takahashi</Text>
        </View>
        {/* button container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handelNavigate} style={styles.nextButton}>
            <Text style={styles.buttonText}>Next</Text>
            <Image source={btnIcon} />
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
    width: 220,
    backgroundColor: "#76AEEE",
    height: "100%",
    borderRadius: 12,
  },
  // input title text
  inputTitleText: {
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    paddingTop: 30,
    paddingBottom: 10,
  },
  //   userNameInputContainer
  userNameInputContainer: {
    marginTop: 29,
  },
  inputText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    marginBottom: 5,
  },
  useNameInput: {
    height: 63,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingLeft: 22,
    fontWeight: 400,
    color: "#646464",
    fontSize: 20,
  },
  exampleName: {
    textAlign: "right",
    marginTop: 8,
    fontSize: 10,
    letterSpacing: 1,
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 247,
    borderRadius: 77,
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 69,
    paddingRight: 32,
    borderColor: "#3391FC",
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 600,
    color: "#000000",
  },
});
export default UserName;
