import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const NameInput = ({ onSubmit }) => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Digite o nome do jogador/time"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Buscar" onPress={() => onSubmit(name)} />
    </View>
  );
};

export default NameInput;
