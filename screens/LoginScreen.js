import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              height: 50,
              width: 120,
              marginTop: 35,
              justifyContent: "space-between",
            }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>
        <View style={{ width: 340, marginTop: 45 }}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            placeholderTextColor={"white"}
            style={{
              width: 320,
              height: 50,
              padding: 15,
              marginBottom: 15,
              borderRadius: 7,
              color: "white",
              backgroundColor: "gray",
            }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholderTextColor={"white"}
            style={{
              width: 320,
              height: 50,
              padding: 15,
              marginBottom: 15,
              borderRadius: 7,
              color: "white",
              backgroundColor: "gray",
            }}
          />
        </View>
        <TouchableOpacity
          style={
            password.length > 4
              ? {
                  width: 316,
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                  marginLeft: 3,
                }
              : {
                  width: 316,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 14,
                  marginLeft: 3,
                }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 19,
              fontWeight: "600",
              textAlign: "center",
              marginTop: 15,
            }}
          >
            New to Netflix ? Sign up now
          </Text>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
