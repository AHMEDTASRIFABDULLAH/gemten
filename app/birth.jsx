import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyles from "../globalcss/styles";
import btnIcon from "../assets/login_icons/icon.png";
// import { StatusBar } from "expo-status-bar";
import calenderIcon from "../assets/login_icons/calender_icon.png";
import { TextInput, Image } from "react-native";
import { useNavigation } from "expo-router";
const Birth = () => {
  const navigation = useNavigation();
  const handelNavigate = () => {
    navigation.navigate("number");
  };
  return (
    <>
      {/* <StatusBar style="dark" backgroundColor="#EBEBED" /> */}
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
            Select date of birth & gender
          </Text>
          <View>
            <Text style={styles.inputText}>Date of Birth</Text>
            <View style={styles.dateInputContainer}>
              <TextInput defaultValue="dd/mm/yyy" style={styles.dateInput} />
              <Image source={calenderIcon} />
              <Text style={styles.textDate}>Date</Text>
            </View>
            <Text style={styles.inputTextTwo}>Gender</Text>
            {/* gender container */}
            <View style={styles.genderContainer}>
              <TouchableOpacity>
                <Text style={styles.genderButton}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.genderButton}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.genderButton}>Third-gender</Text>
              </TouchableOpacity>
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
    width: 126,
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
  // input
  dateInput: {
    width: 284,
    height: 48,
    backgroundColor: "#F2F2F2",
    borderRadius: 4,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#322F35",
  },
  // input
  dateInputContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    position: "relative",
  },
  textDate: {
    position: "absolute",
    top: -10,
    left: 10,
    padding: 2,
    backgroundColor: "#F2F2F2",
    fontSize: 12,
  },
  inputText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
  },
  inputTextTwo: {
    fontSize: 14,
    fontWeight: 400,
    color: "#000000",
    marginTop: 55,
  },
  // Gender containe
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 26,
  },
  genderButton: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    fontWeight: 400,
    fontSize: 15,
  },
  //   button container
  buttonContainer: {
    paddingLeft: 32,
    paddingRight: 21,
  },
  //   next button
  nextButton: {
    backgroundColor: "#FFFFFF",
    marginTop: 98,
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
export default Birth;
