//import package
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//import helper
import {Colors} from '../helper/colors';
import {Fonts} from '../helper/Fonts';
import {Images} from '../helper/images';

const ChatHeader = props => {
  //props
  const {} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Images.arrow />
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 10}}>
          <Image source={Images.user} style={{width: 50, height: 50}} />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={styles.text}>Dark Devil</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Images.video />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <TouchableOpacity>
              <Images.phone />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{marginBottom: 20}} />
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.BOLD,
  },
});

export default ChatHeader;
