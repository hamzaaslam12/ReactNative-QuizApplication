import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { View, TextInput, StyleSheet, Text, Alert, TouchableOpacity, ActivityIndicator  } from 'react-native';

const Login = ({navigation}) => {
// console.log(route.params)
          const [email, setEmail] =useState('')
          const [password, setPassword] =useState('')

          // user state
const HandleLogin = () => {

          if(!email || !password) {
                    Alert.alert('Enter details to login!')
                  } else {
                    // isLoading(true)                     
                    <ActivityIndicator color="red" />
                    auth()
                    .signInWithEmailAndPassword(email, password)
                    .then((res) => {
                      // console.log(res.user.email)
                      Alert.alert('Logged-in successfully!')
                      setEmail('')
                      setPassword('')
                      navigation.navigate('Profile', {userEmail: email})
                    })
                    .catch(error => Alert.alert({ errorMessage: error.message }))
                  }        
        }

          return ( 
                    <View style={styles.container}>
                              <Text>Login SCREEN</Text>
                              <TextInput
placeholder='Example@example.com'
keyboardType='email-address'
value= {email}
onChangeText= {(e) => setEmail(e)}
style={styles.textInput} />

<TextInput
placeholder='Password'
secureTextEntry={true}
value= {password}
onChangeText={(e) => setPassword(e)}
style={styles.textInput} />

<TouchableOpacity
onPress={HandleLogin}
>
          <Text style={styles.loginBtn}>LOGIN</Text>
</TouchableOpacity>

                    </View>
           );
}

const styles = StyleSheet.create({
          container: {
            flex: 1,
            marginTop: 50,
            marginLeft: 50
          },
          textInput: {
          //   marginLeft: 10,
            width: '80%',
            height: 40,
            borderColor: "#000000",
            borderBottomWidth: 1,
            marginTop: 36,
            paddingBottom: 0,
            fontSize: 20
          },
          loginBtn: {
                    color: 'red',
                    marginLeft: 10,
                    marginTop: 10, 
                    fontSize: 20
          }
        });

export default Login;