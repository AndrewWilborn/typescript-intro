
// message?: string is an optional argument

// export const sum = (num1: number, num2: number, message?: string) => {
//   return console.log(`this is the sum: ${num1 + num2} and here is the message ${message}`)
// }

interface Tsum {
  num1: number
  num2: number
  message?: string // optinal argument
}

export const sum = (obj: Tsum) => {
  return console.log(`this is the sum: ${obj.num1 + obj.num2} and here is the message ${obj.message}`)
}