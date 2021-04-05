import React, {useState, useEffect} from 'react'
import { View, Text, Button } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import { FlatList } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {

const [currentUser, setCurrentUser] = useState(''); 
const [userUid, setUserUid] = useState('');
// console.log(route.params.email)

useEffect(() => {

          auth().onAuthStateChanged(user => {
                    setUserUid(user.uid)
                    database().ref('/users').child(user.uid).on('value', snapshot => {
                              setCurrentUser(snapshot.val())          
                    })
          })
          
}, [])

          return ( 
                    <View>
                              <Text>PROFILE SCREEN</Text>

          <Text style={{color: 'blue', fontSize: 21, marginLeft: 40, marginBottom: 5, marginTop: 5,}}>First Name: {currentUser.firstName}</Text>
          <Text>Last Name: {currentUser.secondName}</Text>
          <Text>Email: {currentUser.email}</Text>
          <Text>Your score: {currentUser.score}</Text>
                              
                             {currentUser.score == 0 ? (
                              <Button
                              title='To start the quiz press the button'
                              onPress = {() => navigation.navigate('Dashboard', {id: userUid})} />

                             ) : (
                              <Button
                              title='SignOut'
                              onPress = {() => navigation.navigate('Login')} />
                             )}
                    
                    </View>
           );
}
 
export default Profile;