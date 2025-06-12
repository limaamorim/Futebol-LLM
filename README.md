
# ⚽ Consulta Futebol LLM - Frontend (React Native)

Este é o aplicativo mobile em **React Native** que permite pesquisar nomes de jogadores ou times de futebol e visualizar um resumo gerado por inteligência artificial, com base em dados da **API-Football** e um modelo LLM.

---

## 📱 Funcionalidades

- Entrada de nome de jogador/time
- Requisição para API REST
- Visualização do resumo formatado
- Interface limpa e responsiva

---

## 🚀 Tecnologias usadas

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- `fetch` (nativo) para comunicação com API
- Estilização com `StyleSheet`

---

## 📂 Estrutura

```
.
├── App.js
├── components/
│   └── NameInput.js
├── screens/
│   ├── HomeScreen.js
│   └── ResultScreen.js
├── styles/
│   ├── HomeScreenStyles.js
│   └── ResultScreenStyles.js
```
---

## ⚙️ Como rodar

1. Instale as dependências:

```bash
npm install
# ou
yarn install
```

2. Inicie o projeto:

```bash
npx react-native start
```

3. Em outro terminal, rode o app:

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

> Certifique-se de que o emulador Android ou dispositivo físico esteja conectado.

---

## 🌐 Comunicação com o Backend

Este app envia uma requisição para:

```
GET http://SEU_IP_LOCAL:3001/api/futebol?name=NOME
```

📌 Ajuste a URL no arquivo `futebolApi.js`:

```js
const response = await fetch("http://192.168.0.X:3001/api/futebol?name=" + name);
```

> Substitua `192.168.0.X` pelo IP local da máquina onde está rodando o backend.

> Ambos dispositivos (celular e servidor) devem estar na mesma rede Wi-Fi.

---

## ✨ Exemplo de uso

1. Digite "Messi" no campo de busca.  
2. Toque em **Buscar**.  
3. Veja um resumo do jogador gerado pela IA com base em dados da API.

---

## 📌 Requisitos

- Node.js  
- Expo CLI ou ambiente React Native CLI configurado  
- Backend configurado e rodando na mesma rede  

---

## 📞 Suporte

Em caso de dúvidas ou problemas, abra uma issue ou entre em contato com o desenvolvedor.

---

Feito com ❤️ por [Seu Nome]
