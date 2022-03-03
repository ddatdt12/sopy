  import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
  import React, { Component, useState } from "react";
  import CheckBox from "@react-native-community/checkbox";
    

    
  export default function Create_Post() {

    const [text, settext] = useState("");

    // const [toggleCheckBox, setToggleCheckBox] = useState(false)


      
  return (
      <View style={styles.body}>
        <View style={styles.wrapper}>
          <Text style={styles.circle}> b </Text>
          <Text style={styles.main}>Creating Post </Text>
          <TouchableOpacity style={styles.bgdone}>
             <Text style={styles.done}>Done </Text>
        </TouchableOpacity> 
        </View>


        <View>
          <Text style={styles.title}>Title</Text>
        </View>

        <View>
          <TextInput style={styles.input} />
        </View>
      

          {/* 
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
      /> */}


        <View>
          <TextInput
            style={styles.input2}
            placeholder="Write something here..."
            placeholderTextColor="#8F9BB2"
            multiline={true} 
            value={text}
            onChangeText={(text) => settext(text)}
            numberOfLines={10}
            textAlignVertical="top"

          />
        </View>

  
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

    bgdone: {
      backgroundColor: "#E9F0F7",
      borderRadius: 30,
      shadowColor: "#FFFFFF",
      shadowRadius: 10,
      shadowOpacity: 0.3,
    },
    done: {
      margin: 1,
      color: "#193566",
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
      backgroundColor: "#E9F0F7",
      color: "#1D325E",
      paddingTop: 4,
      marginLeft: 4,
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
      height: 200,
      fontSize:20,
      backgroundColor: "#E9F0F7",
      color: "#193566",
      paddingHorizontal: 10,
      marginLeft: 2,
      marginRight: 2,
      borderColor: "#8F9BB2",
      borderWidth: 1,
      borderRadius: 10,
      marginTop:20,
      padding: 10,
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
