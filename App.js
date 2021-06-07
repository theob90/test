import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Button, Modal, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


function HomeScreen({navigation}){
  return(
    <View>
      <Text> Hello to you</Text>
      <Button title=" Go to second screen"
       onPress={()=> {
        navigation.navigate("SecondScreen");
      }}
      />
    </View>
  )
}


function SecondScreen({navigation}){
  return(
    <View>
      <Text> Hello second screen</Text>
      <Button title=" Go to home"
       onPress={()=> {
        navigation.navigate("HomeScreen");
      }}
      />
    </View>
  )
}

function ModalScreen(){
 return(
   <View>
     <Text>hello i am a modal screen</Text>
   </View>
 ) 
}

const MyStack = createStackNavigator();
const RootStack = createStackNavigator();

function MyStackScreen(){
  return(
  <MyStack.Navigator>
    <MyStack.Screen name ="HomeScreen" component={HomeScreen}/>
    <MyStack.Screen name ="SecondScreen" component={SecondScreen}/>

  </MyStack.Navigator>
  )
}

function RootStackScreen(){
  return(
    <NavigationContainer>
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="MyStackScreen" component={MyStackScreen}/>

      <RootStack.Screen name="Mymodal" component={ModalScreen}/>

    </RootStack.Navigator>
    </NavigationContainer>
  )
}

function List(){
  return(
    <View>
      <Text style={{fontSize: 24, textAlign: 'center'}}> this is the list </Text>
    </View>
  )
}

export default function App(){
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={MyStackScreen}/>
        <Tabs.Screen name="List" component={List}/>

      </Tabs.Navigator>
    </NavigationContainer>
  );
}