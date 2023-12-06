export default function validateData (jsonObj){
  
  const required = [
    "idLancamento",
    "volume",
    "peso",
    "angulo",
    "pressao",
    "distancia",
    "passeio"
  ];

  for (const item of required) {
    if (!jsonObj.hasOwnProperty(item) || jsonObj[item] === null || jsonObj[item] === undefined) {
      return false;
    }
  }

  // Verifica items obrigatórios dentro do array 'passeio'
  if (jsonObj.passeio && Array.isArray(jsonObj.passeio)) {
    for (const ponto of jsonObj.passeio) {
      const itemsPontoObrigatorio = ["latitude", "longitude", "altitude", "velocidadeInst", "aceleracaoInst"];
      for (const item of itemsPontoObrigatorio) {
        if (!ponto.hasOwnProperty(item) || ponto[item] === null || ponto[item] === undefined) {
          return false;
        }
      }
    }
  } else {
    return false; // 'passeio' deve ser um array
  }

  return true;
}