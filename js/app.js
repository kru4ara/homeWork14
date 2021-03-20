import { fetchData } from './fetchData'
import { Posts } from './posts'

fetchData('GET', 'https://jsonplaceholder.typicode.com/users', (response) => {
  const data = JSON.parse(response)
  new Posts(data, wrap)
})