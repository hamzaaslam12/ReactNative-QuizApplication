import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert  } from 'react-native';

const SignIn = ({navigation}) => {
// console.log(abc)

          const [email, setEmail] =useState('')
          const [password, setPassword] =useState('')
          const [firstName, setFirstName] =useState('')
          const [secondName, setSecondName] =useState('')
          const [score, setScore] = useState(0)
          // const [uid, setUid] = useState()
          const reference = database().ref('/users');

const createUser = () => {
          let user = {
                    firstName,
                    secondName,
                    email,
                    password,
                    score,
          }

// create the user

auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCreditional) => {
          reference
          .child(userCreditional.user.uid)
          .set(user)
          .then(() => {
                    // isSignedIn(false)
                    navigation.navigate('Login')
                    // console.log('Data set.')
          });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }
  });

  
}


          return ( 
                    <View style={{marginTop: 50, marginLeft: 50}}>
  <Text style={{color: 'red', fontSize: 30}}>ALLAH KA SHUKAR</Text>


<TextInput
placeholder='First Name'
value={firstName}
onChangeText={(e) => setFirstName(e)}
style={styles.textInput} />

<TextInput
placeholder='Second Name'
value={secondName}
onChangeText={(e) => setSecondName(e)}
style={styles.textInput} />

<TextInput
placeholder='Example@example.com'
keyboardType='email-address'
value={email}
onChangeText={(e) => setEmail(e)}
style={styles.textInput} />

<TextInput
placeholder='Password'
secureTextEntry={true}
value={password}
onChangeText={(e) => setPassword(e)}
style={styles.textInput} />

<View style={{flexDirection: 'row', marginTop: 10}}>
<TouchableOpacity
onPress={createUser}
>
          <Text style={{color: 'red',marginLeft: 10, marginRight: 10, fontSize: 20}}>SIGN IN</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={() => navigation.navigate('Login')}
>
          <Text style={{color: 'red',marginLeft: 10, marginRight: 10, fontSize: 20}}>LOGIN</Text>
</TouchableOpacity>
</View>
    </View>

           );
}

const styles = StyleSheet.create({
          container: {
            flex: 1
          },
          textInput: {
            width: '85%',
            height: 40,
            borderColor: "#000000",
            borderBottomWidth: 1,
            marginTop: 36,
            paddingBottom: 0,
            fontSize: 20
          },
        });
                
export default SignIn;