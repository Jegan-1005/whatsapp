//import package
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

//import helper
import { Colors } from "../helper/colors";
import { Fonts } from "../helper/Fonts";
import { Images } from "../helper/images";

const HomeHeader = (props) => {
  //props
  const { setTabIndex, tabIndex, tablist } = props;

  const renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setTabIndex({
            index: index,
            label: item?.name,
          });
        }}
      >
        <View
          style={{
            alignSelf: "center",
            marginStart: 10,
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: tabIndex?.index == index ? Colors.white : Colors.black,
              fontSize: 14,
              fontFamily: Fonts.BOLD,
            }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.text}>ChatApp</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Images.search />
          </TouchableOpacity>
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity>
              <Images.dot />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 15,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <Images.camera />
        </TouchableOpacity>
        {/* tablist */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={tablist}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={renderItems}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-around",
          }}
        />
      </View>

      <View style={{ marginBottom: 20 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  mainView: {
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.BOLD,
  },
});

export default HomeHeader;
