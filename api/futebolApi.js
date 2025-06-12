export const fetchFutebolInfo = async (name) => {
  const response = await fetch(`https://backendllm-sghy.onrender.com/api/futebol?name=${encodeURIComponent(name)}`);

  const data = await response.json();
  return data.resumo;
};
