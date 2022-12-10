import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import plans from "../data/plans";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

const PlansScreen = () => {
  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState(0);

  const data = plans;
  return (
    <>
      <ScrollView style={{ marginTop: 30, marginLeft: 5 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Choose the plan that is right for you
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Feather name="check" size={24} color="#E50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Watch all you want ad free
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="check" size={24} color="#E50914" />
            <Text
              style={{
                marginLeft: 6,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 3,
              }}
            >
              Recommendations just for you
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="check" size={24} color="#E50914" />
            <Text
              style={{
                marginLeft: 6,
                fontSize: 16,
                fontWeight: "600",
                marginTop: 3,
              }}
            >
              Cancel your plan anytime
            </Text>
          </View>

          <View style={{ marginTop: 20 }} />
          {data.map((item, index) => (
            <Pressable
              onPress={() => {
                setSelected(item.name);
                setPrice(item.price);
              }}
              style={
                selected.includes(item.name)
                  ? {
                      height: 150,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 3,
                      padding: 10,
                      margin: 10,
                    }
                  : {
                      height: 150,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 0.5,
                      padding: 10,
                      margin: 10,
                    }
              }
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 8,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Price : ₹{item.price}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 7,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                  >
                    Video Quality : {item.videoQuality}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 2 }}
                  >
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto name="netflix" size={28} color="black" />
              </View>

              <View
                style={{
                  marginTop: 3,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  Devices you can watch on :{" "}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 5 }}
                      name={device.name}
                      size={26}
                      color="#E50914"
                    />
                  ))}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      {selected.length > 0 && <Pressable
        style={{
          backgroundColor: "#E50914",
          padding: 10,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 50,
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
            Selected Plan : {selected}
          </Text>
        </View>
        <Pressable>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
            Pay ₹{price}
          </Text>
        </Pressable>
      </Pressable>}
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});
