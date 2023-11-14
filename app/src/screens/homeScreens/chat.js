import React, { useState } from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";

//import component
import ChatHeader from "../../component/chatHeader";
import Input from "../../component/customInput";

//import helper
import { Colors } from "../../helper/colors";
import { Fonts } from "../../helper/Fonts";
import { Images } from "../../helper/images";

const Chat = (props) => {
  //state
  const [input, setInput] = useState("");
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary}
        barStyle={"dark-content"}
      />
      <ChatHeader />
      <ScrollView></ScrollView>
      <Input setInput={setInput} input={input} />

      <Images.viewAll width={20} height={20} />
      <View style={{ marginBottom: 20 }} />
    </>
  );
};

const styles = StyleSheet.create({
  largeText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.BOLD,
  },
  smallText: {
    color: Colors.black,
    fontSize: 12,
    fontFamily: Fonts.MEDIUM,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Chat;
