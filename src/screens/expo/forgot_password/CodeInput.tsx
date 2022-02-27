import { StyleSheet, Text, View, 
  Alert ,TextInput, Button, TouchableOpacity, SafeAreaView} from "react-native";
import React, { Component } from "react";


export default function Reset2() {
  const [password, setpassword] = React.useState('');
  
  return (
    <View style={styles.body}>

      <View style={styles.wrapper}>
        <Text style={styles.circle}> b </Text>
        <Text style={styles.main}>Reset Password </Text>
        <Text>   </Text>
      </View>

      <View>
        <Text style={styles.email}>Code to reset your password:</Text>
      </View>

      <View>
          <TextInput style={styles.input}
                textContentType="emailAddress"
                keyboardType="email-address"
                value={password}
                onChangeText={(text) => 
                setpassword(text)
              }
               ></TextInput>
        </View>

      <View>
        <Text style={styles.note}>
          {" "}
          Check out your mailbox to get the code
        </Text>
      </View>
      
        <TouchableOpacity style={styles.bgsend}>
             <Text style={styles.send}> Send </Text>
        </TouchableOpacity> 

        
        {/* <SafeAreaView style={styles.safe}>
          <Button title="somthing"
              onPress={() =>
                Alert.alert(
                  "Notice",
                  "Your code was incorrect Please try again",
                  [
                    {
                      text:"OK",
                    }
                  ]
                )
          }>
              
        
 
         </Button>

        </SafeAreaView> */}
    </View>
  );
}


const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
      

  circle: {
    width:30,
    height: 30,
    backgroundColor: "#E9F0F7",
    borderRadius: 100,
    color:"black",
    textAlign:"center",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },

  },

  main:{
    color: "#193566",
    fontSize: 26,
    textAlign: "center",
    fontWeight: 'bold',
    
  },

  email: {
    color: "#8F9BB2",
    marginLeft: 0,
    fontSize: 20,
    paddingTop: 30,
    paddingBottom:5,
  },

  input: {
    backgroundColor: "#E9F0F7",
    paddingTop:4,
    marginLeft: 4,
    marginRight: 4,
    borderColor:"#8F9BB2",
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },


  note: {
    color: "#8F9BB2",
    paddingHorizontal: 4,
    paddingTop: 10,
    fontStyle: "normal",
    textAlign: "left",
    fontSize: 15,
  },

  safe:{
    padding: 30,
    backgroundColor: "#E9F0F7",
    borderRadius: 30,
    shadowColor: "#000000",
    shadowRadius: 30,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },

  bgsend: {
    marginTop:20,
    backgroundColor: "#E9F0F7",
    marginLeft: 250,
    marginRight: 10,
    borderRadius: 30,
    shadowColor: "#000000",
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
  send: {
    color: "#193566",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 'bold',
    justifyContent: "center",
    textAlign: "center",
  },

  text1:{
    color:"#193566",
    fontSize: 22,
    textAlign:"center",
  },
  text2:{
    color:"#193566",
    fontSize: 18,
    textAlign:"center",
  },

  text3:{
    color:"#1772F1",
    fontSize: 22,
    textAlign:"center",
  },

});
