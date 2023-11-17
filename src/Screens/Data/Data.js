import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import AddButton from "../../Components/AddButton";
import navigationStrings from "../../Navigations/navigationStrings";

import { useSelector } from "react-redux";
const Data = ({ navigation }) => {
  const store = useSelector((state) => state.arr);
  return (
    <View style={styles.topView}>
      <View>
        <Text
          style={{ fontSize: 25, fontFamily: "Roboto-Bold", fontWeight: "600" }}
        >
          Your Todo
        </Text>
      </View>

      {store.length > 0 ? (
        <FlatList
          data={store}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.listData}>
                <Text>Name:{item.name}</Text>
                <Text>Email:{item.email}</Text>
                <Text>Phone:{item.phone}</Text>
                <Text>Description:{item.description}</Text>
              </View>
            );
          }}
        />
      ) : (
        <View style={styles.txt}>
          <Text style={{ fontSize: 25, fontFamily: "Roboto-Bold" }}>
            No Data Found
          </Text>
        </View>
      )}

      <AddButton
        press={() => navigation.navigate(navigationStrings.ADD_DATA)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  txt: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  listData: {
    borderBlockColor: "black",
    borderWidth: 1,
    width: 250,
    padding: 10,
    margin: 2,
  },
});

export default Data;
