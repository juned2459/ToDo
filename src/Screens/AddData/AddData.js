import {StyleSheet, Text, View, TextInput} from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Savebutton from "../../Components/SaveButton";
import BackButton from "../../Components/BackButton";
import navigationStrings from "../../Navigations/navigationStrings";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/TodoSlice";

const AddData = ({ navigation }) => {
 const dispatch=useDispatch();
  const [inputdata, SetInputData] = useState({
    name: "",
    email: "",
    phone: "",
    description:"",
  });

  const changeText = (key, value) => {
    SetInputData({ ...inputdata, [key]: value });
  };

  const onSubmit = () => {
   dispatch(addTodo(inputdata))
    navigation.navigate(navigationStrings.DATA);
  };

  return (
    <View>
      <View>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.txt}>
        <Text
          style={{ fontSize: 25, fontFamily: "Roboto-Bold", fontWeight: "600" }}
        >
          Add Todo
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          value={inputdata.name}
          onChangeText={(n) => changeText("name", n)}
          placeholder="Enter Your Name"
        />

        <TextInput
          style={styles.input}
          value={inputdata.email}
          onChangeText={(e) => changeText("email", e)}
          placeholder="Enter Your Email"
          keyboardType="email-address"
        />
        
        <View style={styles.inputnumber}>
          <PhoneInput
            country={"in"}
            value={inputdata.phone}
            onChange={(p) => changeText("phone", p)}
          />
        </View>

        <TextInput
          style={styles.input}
          value={inputdata.description}
          onChangeText={(d) => changeText("description", d)}
          placeholder="Enter Description"
          multiline={true}
        />
      </View>
      <View>
        <Savebutton onPress={onSubmit} />
      </View>
    </View>
  );
};

export default AddData;

const styles = StyleSheet.create({
  txt: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 35,
    borderRadius: 5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
  },
  inputnumber: {
    justifyContent: "center",
  },
});
