//import package
import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// import helper
import {Colors} from '../../helper/colors';
import {Images} from '../../helper/images';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Images.logo width={150} height={150} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;

// //import package
// import React from 'react';
// import {
//   StatusBar,
//   View,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import CustomButton from '../../component/customButton';

// //import helper
// import {Images} from '../../helper/images';

// const Splash = props => {
//   return (
//     <>
//       <StatusBar barStyle={'light-content'} />

//       <View style={styles.container}>
//         {/* Background Image */}
//         <Image
//           source={Images.splashPng}
//           style={styles.backgroundImage}
//           resizeMode="cover"
//         />
//         <CustomButton
//           title={'Get started'}
//           onPress={() => {
//             props.navigation.navigate('SignIn');
//           }}
//         />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Splash;
