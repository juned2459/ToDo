import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

const Savebutton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.saveBtn}>
          <Text style={{ color: "white" }}>SAVE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Savebutton;

const styles = StyleSheet.create({
  saveBtn: {
    marginTop:25,
    backgroundColor: "green",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderRadius: 20,
    height: 35,
    width: 80,
  },
});
