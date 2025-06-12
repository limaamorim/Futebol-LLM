import React from 'react';
import { View, Text, Image } from 'react-native';
import NameInput from '../components/NameInput';
import { fetchFutebolInfo } from '../api/futebolApi';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const handleSubmit = async (name) => {
    try {
      const resumo = await fetchFutebolInfo(name);
      navigation.navigate('Resultado', { resumo });
    } catch (error) {
      alert('Erro ao buscar resumo de futebol');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/soccer-icon.png')} 
        style={{ width: 100, height: 100, alignSelf: 'center', marginBottom: 20 }}
      />
      <Text style={styles.title}>Consulta Futebol LLM</Text>
      <Text style={styles.subtitle}>Obtenha informações detalhadas sobre jogadores, times e estatísticas</Text>
      <NameInput onSubmit={handleSubmit} />
    </View>
  );
};

export default HomeScreen;