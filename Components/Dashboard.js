import React, { useState } from 'react'
import { View, Text, Alert } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';


const Dashboard = ({navigation, route}) => {
// console.log(route.params.id)

const [qust, setQust] = useState([
          {
          id: 1,          
          Q: '20 + 20',
          A: '30',
          B: '40',
          C: '50',
          },
          {
          id: 2,
          Q: '22 + 23',
          A: '44',
          B: '45',
          C: '46',
          },
          {
          id: 3,
          Q: '30 + 20',
          A: '40',
          B: '50',
          C: '60',
          },
])
const [num, setNum] = useState(0)
const [ans, setAns] = useState(0)
const [checkedA, setCheckedA] = useState(false)
const [checkedB, setCheckedB] = useState(false)
const [checkedC, setCheckedC] = useState(false)

const checkingAns1 = () => {
          setCheckedA(true)
          setCheckedB(false)
          setCheckedC(false)
}
const checkingAns2 = () => {
          setCheckedA(false)
          setCheckedB(true)
          setCheckedC(false)
}
const checkingAns3 = () => {
          setCheckedA(false)
          setCheckedB(false)
          setCheckedC(true)
}

const nextHandler = () => {
          // console.log()
          if(checkedA || checkedB || checkedC){

                    if(checkedB) {
                              setAns(ans + 1)
                    }
                    else {setAns(ans + 0)}
                    setCheckedA(false)
                    setCheckedB(false)
                    setCheckedC(false)
                    setNum(num + 1)

          }
          else {Alert.alert('Select any one option!')}
          
}

const handleSubmit = () => {
          // console.log('run')
          if(checkedA || checkedB || checkedC){
                    // if(checkedB){
                              // (setAns(ans + 1))
                    // }
                    // else { Alert.alert('Select any one option!')}
checkedB ? ( 
          database().ref('/users').child(route.params.id).update({
                    score: 1 + ans
                  })
                  .then(() => navigation.navigate('Profile'))
) : ( 
          database().ref('/users').child(route.params.id).update({
                    score: ans
                  })
                  .then(() => navigation.navigate('Profile'))
)
                    
          }
          else{Alert.alert('Select any one option!')}
}
// console.log(ans)
          return ( 
                    <View>
                              <Text>Dashboard SCREEN</Text>
                              {/* MODAL */}
                              {/* <View>
                                        <Text>INSTRUCTIONS:</Text>
                                        <Text style={{marginLeft: 12, fontSize: 17}}>

                                        1) Ut est velit, maximus in augue sed, blandit lacinia lectus. Vivamus id placerat turpis.
                                        {'\n'}{'\n'}
                                        2) Nunc ac ante a nisi dignissim mattis. Nam aliquam orci vitae leo porttitor, ac pretium ligula interdum.
                                        {'\n'}{'\n'}
                                        3) In ut massa dui. Donec eleifend sem vel nulla tincidunt consectetur.
                                        {'\n'}{'\n'}
                                        4) Fusce sodales ligula dolor, sed commodo felis dignissim vitae. In nec dolor enim.
                                        
                                        </Text>
                                        
                                        <TouchableOpacity onPress={() => console.log('run')}>
                                                  <Text style={{color: 'red', fontSize: 18, marginTop: 10, marginLeft: 10}}>Start Quiz</Text>
                                        </TouchableOpacity>
                              </View>        */}

{
          <View id = {qust[num].id}>
                    <Text style={{color: 'blue', fontSize: 25, marginLeft: 40, marginBottom: 5, marginTop: 5,}}>{qust[num].Q}</Text>
          
                   <TouchableOpacity onPress={checkingAns1}><Text style={checkedA ? ({color: 'red', fontSize: 20}) : ({color: 'green', fontSize: 20})}>{qust[num].A}</Text></TouchableOpacity>
                   <TouchableOpacity onPress={checkingAns2}><Text style={checkedB ? ({color: 'red', fontSize: 20}) : ({color: 'green', fontSize: 20})}>{qust[num].B}</Text></TouchableOpacity>
                   <TouchableOpacity onPress={checkingAns3}><Text style={checkedC ? ({color: 'red', fontSize: 20}) : ({color: 'green', fontSize: 20})}>{qust[num].C}</Text></TouchableOpacity>
                  {
                            num < 2 ? (
<TouchableOpacity onPress = {nextHandler}>
          <Text style={{color: 'blue', fontSize: 17}}>Next</Text>
</TouchableOpacity>
                            ) : (
<TouchableOpacity onPress = {handleSubmit}>
          <Text style={{color: 'blue', fontSize: 17}}>Submit</Text>          
</TouchableOpacity>

                            )
                  }
                    
          </View>
}




                    </View>
           );
}
 
export default Dashboard;