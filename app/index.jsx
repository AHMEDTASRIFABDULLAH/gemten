import { StatusBar } from "expo-status-bar";
import React from "react";
import btnIcon from "../assets/login_icons/icon.png";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import globalStyles from "../globalcss/styles";
import { useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();
  const handelNavigate = () => {
    navigation.navigate("birth");
  };
  return (
    <>
      {/* <StatusBar style="dark" backgroundColor="#EBEBED" /> */}
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={globalStyles.topViewColor}></View>
        <View style={globalStyles.container}>
          <View style={styles.progressBarContainer}>
            <View style={styles.progress}>
              <View style={styles.progressChaild}></View>
            </View>
          </View>
          {/* progressBar End */}
          {/* input Title Text */}
          <Text style={styles.inputTitleText}>Create a new account</Text>
          {/* input Title End */}
          {/* input container */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>First name</Text>
            <TextInput style={styles.inputOne} />
            <Text style={styles.inputTextTwo}>Last name</Text>
            <TextInput style={styles.inputOne} />
          </View>
          {/* Next button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handelNavigate}
              style={styles.nextButton}
            >
              <Text style={styles.buttonText}>Next</Text>
              <Image source={btnIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* progressBar */}
      </SafeAreaView>
    </>
  );
}

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
    width: 47,
    backgroundColor: "#76AEEE",
    height: "100%",
    borderRadius: 12,
  },
  // progressBar Start End
  //   input Title Text
  inputTitleText: {
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    paddingTop: 30,
  },
  //   input Title Text end
  //   input container
  inputContainer: {
    paddingTop: 29,
  },
  //   input text
  inputText: {
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 400,
    color: "#000000",
  },
  inputTextTwo: {
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 400,
    color: "#000000",
    paddingTop: 14,
  },
  //   input one
  inputOne: {
    height: 63,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 140,
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
});
