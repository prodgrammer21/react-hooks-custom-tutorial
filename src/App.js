import React from 'react';
import { useForm } from './useForm'

const App = () => {
  const initialValues = {
    name: '',
    age: 0
  }

  const [values, handleOnChange] = useForm(initialValues)

  console.log("values: ", values)

  return (
    <div>
      <input name="name" placeholder="input name" onChange={handleOnChange} />
      <input name="age" placeholder="input age" onChange={handleOnChange} />
    </div>
  )
}

export default App