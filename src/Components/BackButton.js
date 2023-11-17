import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import imagePath from "../constants/imagePath";

const BackButton = ({onPress}) => {
  return (
    <View style={{ alignSelf: "flex-start" }}>
      <TouchableOpacity onPress={onPress}>
        <Image style={{ height: 50, width: 50 }} source={imagePath.icBack} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
