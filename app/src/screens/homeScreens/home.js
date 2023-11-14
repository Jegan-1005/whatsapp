//import package
import React, { useEffect, useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  FlatList,
} from "react-native";
import Contacts from "react-native-contacts";
import moment from "moment";

//import component
import HomeHeader from "../../component/homeHeader";

//import helper
import { Colors } from "../../helper/colors";
import { Fonts } from "../../helper/Fonts";
import { RemoveCountryCode } from "../../helper/helperFunction";
import { Images } from "../../helper/images";
import { tablist } from "../../helper/lists";

const Home = (props) => {
  //state
  const [contactDetails, setContactDetails] = useState([]);
  const [tabIndex, setTabIndex] = useState({
    index: 0,
    label: "CHATS",
  });

  const GetAllContact = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: "Contacts",
      message: "This app would like to view your contacts.",
      buttonPositive: "Please accept bare mortal",
    })
      .then((res) => {
        try {
          Contacts.getAll()
            .then((contacts) => {
              filterContactList(contacts);
            })
            .catch((err) => {
              console.log(err, "err--contactsgrouped");
            });
        } catch (err) {
          console.log(err, "errrr---Contacts.getAll()");
        }
      })
      .catch((error) => {
        console.error("Permission error: ", error);
      });
  };
  const filterContactList = async (allContact) => {
    try {
      let contacts = [];
      allContact &&
        allContact?.length > 0 &&
        allContact?.map((item) => {
          if (
            item?.phoneNumbers != undefined &&
            item?.phoneNumbers[0]?.number != undefined
          ) {
            const numericPart = RemoveCountryCode(
              item?.phoneNumbers[0]?.number
            );
            const data = {
              name: item?.givenName + " " + item?.familyName,
              number: item?.phoneNumbers[0]?.number,
              date: new Date(),
            };
            contacts.push(data);
          }
        });
      setContactDetails(contacts);
    } catch (err) {
      console.log("errgetContactFromApi", err);
    }
  };

  useEffect(() => {
    GetAllContact();
  }, []);

  const renderContactsItems = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Chat");
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <Image source={Images.user} style={{ width: 60, height: 60 }} />
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            <View style={styles.content}>
              <Text style={styles.largeText}>{item.name}</Text>
              <Text style={styles.largeText}>
                {moment(item.date).format("HH:mm")}
              </Text>
            </View>
            <View style={[styles.content, { marginTop: 10 }]}>
              <Text style={styles.smallText}>Lorem insum</Text>
              <View
                style={{
                  backgroundColor: "red",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={[
                    styles.smallText,
                    { marginHorizontal: 5, color: Colors.white },
                  ]}
                >
                  5
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.primary}
        barStyle={"dark-content"}
      />
      <HomeHeader
        setTabIndex={setTabIndex}
        tabIndex={tabIndex}
        tablist={tablist}
      />
      {tabIndex?.label == "CHATS" && (
        <View style={{ marginTop: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contactDetails}
            keyExtractor={(item) => item.id}
            renderItem={renderContactsItems}
          />
        </View>
      )}

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

export default Home;
