import { useState } from 'react'

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)
  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return [
    values,
    handleOnChange
  ]
}