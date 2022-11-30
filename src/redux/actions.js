export const dec = () => ({type: 'DECREMENT'})
export const inc = () => ({type: 'INCREMENT'})
export const random = (num) => ({type: 'RANDOM', payload: num})