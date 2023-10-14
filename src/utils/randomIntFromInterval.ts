export default function randomIntFromInterval() {
  const min = 1
  const max = 1017

  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
