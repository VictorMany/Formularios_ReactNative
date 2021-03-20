import { LogBox, StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/Colors';


LogBox.ignoreAllLogs();


export default function App() {

  const [cantidad, setCantidad] = useState(0);
  const [interes, setInteres] = useState(0);
  const [meses, setMeses] = useState(0);
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

  }, [cantidad, interes, meses]);

  const calculate = () => {
    if (!cantidad) {
      setErrorMessage('No has ingresado ninguna cantidad');
    } else if (!interes) {
      setErrorMessage('añade los intereses');
    } else if (!meses) {
      setErrorMessage('añade los meses');
    } else {
      const i = interes / 100;
      const total = cantidad * (1 + i);
      setTotal(total);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Prestamos</Text>
        <Form />
      </SafeAreaView>
      <Footer />
    </>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    height: 290,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    position: 'absolute',
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15
  }
})