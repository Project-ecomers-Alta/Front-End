import axios from "axios"
import { useState, useEffect } from "react"
import { useToken } from "@/utils/context/token"

interface User {
  UserName: string
  Domicile: string
  Email: string
  PhoneNumber: number
  Image: string
}

const useRetrieveUpdateProfileUser = () => {
  const { token } = useToken()
  const [data, setData] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setIsLoading(true)
        const response = await axios.put("https://be20.online/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setData(response.data.data)
      } catch (error) {
        setError(`Error fetching data: ${error}`)
      } finally {
        setIsLoading(false)
      }
    }

    handleSubmit()
  }, [token])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveUpdateProfileUser
