import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const buttons = [
    ['AC', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '+/-', '=']
];

export default function Calculadora() {
    const [expression, setExpression] = useState('');
    const [history, setHistory] = useState([]);

    const handlePress = (value) => {
        if (value === 'AC') {
            setExpression('');
        } else if (value === 'DEL') {
            setExpression(expression.slice(0, -1));
        } else if (value === '=') {
            try {
                const result = eval(expression).toString();
                setHistory([expression + ' = ' + result, ...history]);
                setExpression(result);
            } catch {
                setExpression('Erro');
            }
        } else if (value === '+/-') {
            if (expression) {
                const toggle = parseFloat(expression) * -1;
                setExpression(toggle.toString());
            }
        } else {
            setExpression(expression + value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Calculadora</Text>
            <ScrollView style={styles.history}>
                <Text style={styles.label}>Histórico</Text>
                {history.map((item, index) => (
                    <Text key={index} style={styles.historyItem}>{item}</Text>
                ))}
            </ScrollView>
            <View style={styles.expressionContainer}>
                <Text style={styles.label}>Expressão</Text>
                <Text style={styles.expression}>{expression}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {buttons.map((row, i) => (
                    <View key={i} style={styles.row}>
                        {row.map((btn) => (
                            <TouchableOpacity
                            key={btn}
                            style={[
                              styles.button,
                              ['AC', 'DEL', '%', '/', '*', '-', '+', '=', '+/-'].includes(btn) && { backgroundColor: '#ff8c00' }
                            ]}
                            onPress={() => handlePress(btn)}
                          >
                            <Text style={styles.buttonText}>{btn}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginBottom: 10,
        color: '#fff'
    },
    history: { 
        flex: 1, 
        borderWidth: 1, 
        marginBottom: 5, 
        padding: 5,
        
    },
    label: { 
        fontWeight: 'bold',
        color: '#fff'
    },
    historyItem: { 
        fontSize: 14,
        color: '#fff'
    },
    expressionContainer: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 5 
    },
    expression: { 
        fontSize: 18, 
        marginTop: 5,
        color: '#fff'
    },
    buttonsContainer: { 
        flexDirection: 'column' 
    },
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 5, 
    },
    button: { 
        backgroundColor: '#2F4F4F', 
        padding: 20, 
        borderRadius: 10, 
        flex: 1, 
        alignItems: 'center', 
        margin: 2 
    },
    buttonText: { 
        fontSize: 18, 
        color: '#fff' 
    }
});