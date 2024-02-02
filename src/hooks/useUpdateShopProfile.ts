import axios from "axios"
import { useState } from "react"
import { useToken } from "@/utils/context/token"

interface User {
  id: number
  ShopName: string
  Tagline: string
  Province: string
  City: string
  Subdistrict: string
  Address: string
  ShopImage: string
}
const useUpdateShopProfile = () => {
  const { token } = useToken()
  const [data, setData] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const updateShop = async (userData: Partial<User>) => {
    try {
      setIsLoading(true)
      console.log("Updating profile with data:", userData)

      const response = await axios.put(
        "https://be20.online/user/shop",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

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
    updateShop,
  }
}

export default useUpdateShopProfile
