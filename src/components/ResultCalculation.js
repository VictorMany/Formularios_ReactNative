import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../utils/colors'


export default function ResultCalculation(props) {
  const { cantidad, intereses, meses, total, errorMessage } = props;

  return (
    <View style={styles.content}>
      <View style={styles.boxResult}>
        <Text style={styles.title}></Text>
        <View style={styles.dataResult}>
          <Text style={styles.resultado}>Resultado </Text>
          <DataResult  title="Cantidad solicitada $" value={`${cantidad}`}></DataResult>
          <DataResult title="% Interes:" value={`${intereses}`}></DataResult>
          <DataResult title="Plazos: " value={`${meses} meses`}></DataResult>
          <DataResult title="Pago mensual $" value={`${total}`}></DataResult>
        </View>
      </View>
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

function DataResult(props) {
  const { title, value } = props;

  return (
    <View>
      <Text style={styles.labels}>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40
  },
  boxResult: {
    padding: 30
  },
  values: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  dataResult:{
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 20,
    borderRadius: 25
  },
  resultado:{
    color: 'white',
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  labels:{
    color: 'white',
    fontWeight: 'bold'
  }
});