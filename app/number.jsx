import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import btnIcon from "../assets/login_icons/icon.png";
import globalStyles from "../globalcss/styles";
import { useNavigation } from "expo-router";
const Number = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();
  const handelNavigate = () => {
    navigation.navigate("username");
  };
  return (
    <>
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
          <Text style={styles.inputTitleText}>
            Enter your phone number and email
          </Text>
          <View style={styles.numberInputContainer}>
            <Text style={styles.inputText}>Phone Number</Text>
            <View style={styles.flexInputContainer}>
              <TextInput style={styles.nunberStartInput} value="Ban +880" />
              <TextInput keyboardType="numeric" style={styles.nunberInput} />
            </View>
          </View>
          <Text style={styles.inputTextTwo}>Mail</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.nunberInputTwo}
            value="@gmail.com"
          />
          {/* Mail verification */}
          <View style={styles.emailcontainer}>
            <Text style={styles.label}>Mail verification code</Text>

            <View style={styles.inputContainer}>
              {/* OTP Input */}
              <TextInput
                style={styles.verificationInput}
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
                maxLength={6} // Adjust based on OTP length
                textAlign="center"
              />
              <View style={styles.dashContainer}>
                <Text style={styles.inputDash}>_</Text>
                <Text style={styles.inputDash}>_</Text>
                <Text style={styles.inputDash}>_</Text>
                <Text style={styles.inputDash}>_</Text>
                <Text style={styles.inputDash}>_</Text>
                <Text style={styles.inputDash}>_</Text>
              </View>
              {/* Send Code Button */}
              <TouchableOpacity
                style={styles.sendCodeButton}
                onPress={() => alert("Code Sent!")}
              >
                <Text style={styles.sendCodeText}>Send Code</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* button container */}
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
      </SafeAreaView>
    </>
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
    width: 193,
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
  //   number Input Container
  numberInputContainer: {
    marginTop: 29,
  },
  inputText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    marginBottom: 5,
  },
  inputTextTwo: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    marginTop: 14,
    marginBottom: 5,
  },

  flexInputContainer: {
    flexDirection: "row",
    gap: 5,
  },

  //   number Start input
  nunberStartInput: {
    width: "30%",
    paddingVertical: 17,
    paddingLeft: 15,
    paddingRight: 19,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  nunberInput: {
    height: 63,
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  nunberInputTwo: {
    height: 63,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    textAlign: "right",
    paddingRight: 24,
  },
  //   Mail verification
  emailcontainer: {
    backgroundColor: "#F5F5F5",
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    marginTop: 17,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    justifyContent: "space-between",
  },
  verificationInput: {
    height: 63,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderColor: "#D1D1D1",
    position: "relative",
    fontSize: 28,
    letterSpacing: 20,
    width: "65%",
    fontWeight: 600,
  },
  sendCodeButton: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#3391FC",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  sendCodeText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  dashContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 18,
    position: "absolute",
    paddingHorizontal: 15,
    bottom: 0,
    paddingBottom: 2,
    width: "60%",
  },
  inputDash: {
    fontSize: 38,
    color: "#7C7C7C",
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 35,
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
export default Number;
