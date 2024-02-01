import axios from "axios"
import { useState, useEffect } from "react"
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

const useRetrieveShop = () => {
  const { token } = useToken()
  const [data, setData] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("https://be20.online/user/shop", {
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

    fetchData()
  }, [token])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveShop
