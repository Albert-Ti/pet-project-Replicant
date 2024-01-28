import React from 'react'

type UseForm = { [key: string]: string }

const useForm = (initialValue = {}) => {
  const [values, setValues] = React.useState<UseForm>(initialValue)

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues({ [name]: value })
  }

  return { values, handleChanges }
}

export default {
  useForm,
}
