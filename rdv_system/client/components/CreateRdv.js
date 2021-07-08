import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './data/Data';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Picker,
} from 'react-native';

const styles = StyleSheet.create({
  myform: {
    margin: 10,
    padding: '10%',
    height: 'auto',
    borderWidth: 2,
    borderRadius: 8,
  },
  btn: {
    width: '80%',
    marginTop: 20,
    backgroundColor: 'red',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const CreateRdv = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [cin, setCin] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [planing, setPlaning] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const getPlaning = async () => {
    try {
      const { data } = await axios.get('http://192.168.1.36:3222/api/getplaning');
      setPlaning(data);
      console.log(data)

    } catch (error) {
      throw Error(error)
    }

  };
  useEffect(() => {
    getPlaning();
  }, []);

  console.log('my planing', planing)
  let Heure = [];
  if (planing) {
    for (let i = 0; i <= planing.totalRDV; i++) {

      Heure.push(

        <Picker.Item key={i} label={Data[i]} value={Data[i]} />
      )
    }
  }

  console.log('myData', Data)
  console.log('Heure', Heure)
  // console.log('selected', selectedValue)
  // console.log('f n', firstName)
  // console.log('l n', lastName)
  // console.log('email', email)
  // console.log('phone', phone)

  const sendData = async () => {
    fetch('http://192.168.1.36:3222/api/rendezvous', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rdvHour: selectedValue,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        CIN: cin,


      }),
    });
    console.log('test')

  };
  return (
    <View style={styles.myform}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>Rendez-vous</Text>
      <SafeAreaView>
        <Picker
          selectedValue={selectedValue}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Choisi l'heure" value="" />
          {Heure}
        </Picker>
        <TextInput
          style={styles.input}
          onChangeText={setfirstName}
          value={firstName}
          placeholder="first name"
          keyboardType="default"

        />
        <TextInput
          style={styles.input}
          onChangeText={setlastName}
          value={lastName}
          placeholder="last name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setemail}
          value={email}
          placeholder="email"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setphone}
          value={phone}
          placeholder="phone"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCin}
          value={cin}
          placeholder="CIN"
          keyboardType="default"
        />
        <Button
          onPress={sendData}
          title="send"
          color="#841584"
          style={styles.btn}
        />
      </SafeAreaView>
    </View>
  );
};
export default CreateRdv;
