import React, { useState } from 'react'

export function useForm<T>(initialState: T) {
    const [form, setForm] = useState<T>(initialState)
    const handdleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }
  return {
    form,
    handdleChange
  }
}
