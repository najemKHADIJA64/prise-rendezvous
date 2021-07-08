import React, { useState } from 'react';
import axios from 'axios';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  datePickerStyle2: {
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
});

const Planing = () => {
  const [data, setData] = useState('');
  const [datStart, setDateStart] = useState('01-01-2021');
  const [datEnd, setDateEnd] = useState('01-01-2021');

  const sendData = async () => {
    fetch('http://172.16.9.178:3222/api/planing', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalRDV: parseInt(data, 10),
        dateStart: datStart,
        dateEnd: datEnd,
      }),
    });
  };
  return (
    <View style={styles.myform}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Planing
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setData}
          value={data}
          placeholder="total RDV"
          keyboardType="numeric"
        />
        <DatePicker
          style={styles.datePickerStyle}
          date={datStart}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2021"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={dateStart => setDateStart(dateStart)}
        />
        <DatePicker
          style={styles.datePickerStyle2}
          date={datEnd} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2021"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={dateEnd => setDateEnd(dateEnd)}
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

export default Planing;
