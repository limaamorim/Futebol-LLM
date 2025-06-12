import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ResultScreenStyles';

const ResultScreen = ({ route }) => {
  const { resumo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resumo do Jogador</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.content}>{resumo}</Text>
      </View>
    </ScrollView>
  );
};

export default ResultScreen;