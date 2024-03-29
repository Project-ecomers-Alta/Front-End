import axios from "axios"
import { useState } from "react"
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

  const updateProfile = async (userData: Partial<User>) => {
    try {
      setIsLoading(true)
      console.log("Updating profile with data:", userData)

      const response = await axios.put("https://be20.online/user", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log("API Response:", response)

      if (response.data) {
        setData(response.data)
      } else {
        console.error("Invalid API response structure:", response)
        setError("Invalid API response structure")
      }
    } catch (error) {
      console.error("Error updating profile:", error)
      setError(`Error updating profile: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    isLoading,
    error,
    updateProfile,
  }
}

export default useRetrieveUpdateProfileUser
