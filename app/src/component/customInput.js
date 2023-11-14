import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { Colors } from "../helper/colors";
import { Fonts } from "../helper/Fonts";
import { Images } from "../helper/images";

const Input = ({
  label,
  iconName,
  error,
  password,
  input,
  setInput,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 20 }}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: Colors.light,
            alignItems: "center",
          },
        ]}
      >
        <TouchableOpacity>
          <Images.emoji />
        </TouchableOpacity>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={"Message"}
          placeholderTextColor={Colors.black}
          style={style.inputStyle}
          {...props}
          onChangeText={(text) => {
            setInput(text);
          }}
          value={input}
        />
        <View style={{ flexDirection: "row" }}>
          {!input && (
            <>
              <TouchableOpacity>
                <View style={style.icons}>
                  <Images.attachment />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={style.icons}>
                  <Images.camera />
                </View>
              </TouchableOpacity>
            </>
          )}

          {input && (
            <TouchableOpacity>
              <View style={style.icons}>
                <Images.send width={20} height={20} />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.white,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  icons: {
    marginRight: 10,
  },
  inputStyle: { color: Colors.black, flex: 1, fontFamily: Fonts.MEDIUM },
});

export default Input;
