import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
  

  
export default function Create_Event() {

  const [text, settext] = useState("");


    
 return (
    <View style={styles.body}>
      <View style={styles.wrapper}>
        <Text style={styles.circle}> b </Text>
        <Text style={styles.main}>Creating Event</Text>
        <Text style={styles.done}>Done </Text>
      </View>

      <View>
        <Text style={styles.title}>Title</Text>
      </View>

      <View>
        <TextInput style={styles.input} />        
      </View>
      
      <TextInput
          placeholder="Write something here..."
          placeholderTextColor="#8F9BB2"
          multiline={true}
          style={styles.input2}
          numberOfLines={20}
          value={text}
          textAlignVertical="top"
          onChangeText={(text) => settext(text)}
      /> 
   

 
      <TouchableOpacity style={styles.add}>
             <Text style={styles.pic}> Add picture </Text>
        </TouchableOpacity> 

    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "#E9F0F7",
    borderRadius: 100,
    color: "black",
    textAlign: "center",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },

  main: {
    color: "#193566",
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },

  done: {
    color: "#274170",
    fontSize: 20,
    fontStyle: "normal",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    color: "#8F9BB2",
    marginLeft: 0,
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 5,
  },


  input: {
    fontSize:20,
    backgroundColor: "#E9F0F7",
    color: "#1D325E",
    paddingTop: 4,
    marginLeft: 6,
    marginRight: 4,
    borderColor: "#8F9BB2",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },

  text: {
    color: "#1D325E",
    fontSize: 22,
    margin: 8,
  },
  
  input2: {
    fontSize:20,
    backgroundColor: "#E9F0F7",
    color: "#193566",
    marginLeft: 2,
    marginRight: 2,
    borderColor: "#8F9BB2",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal:10,
    padding:10,
    margin: 10,
    height:300,
  },

  add: {
    marginTop:20,
    backgroundColor: "#FFFFFF",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    shadowColor: "#D6E5F2",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
  pic: {
    color: "#193566",
    fontSize: 24,
    fontStyle: "normal",
    justifyContent: "center",
    textAlign: "center",
  },
});
