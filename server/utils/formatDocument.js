export default function formatDocument (str){
  const splittedData = str.split(";");
  return {
    idLancamento: Number(splittedData[0]),
    volume: Number(splittedData[1]),
    peso: Number(splittedData[2]),
    angulo: Number(splittedData[3]),
    pressao: Number(splittedData[4]),
  }
}