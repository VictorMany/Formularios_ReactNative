import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function ResultCalculation(props) {
    const { cantidad, intereses, meses, total, errorMessage } = props;

    return (
        <View style={styles.content}>
            <View style={styles.boxResult}>
                <Text style={styles.title}></Text>
                <DataResult title="Cantidad solicitada $" value={`${cantidad}`}></DataResult>
                <DataResult title="% Interes:" value={`${interes}`}></DataResult>
                <DataResult title="Plazos: " value={`${meses} meses`}></DataResult>
                <DataResult title="Pago mensual $" value={`${total}`}></DataResult>
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
            <Text>{title}</Text>
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
        color: '#f0',
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    }
});