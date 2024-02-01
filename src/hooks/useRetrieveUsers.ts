import axios from "axios"
import { useState, useEffect } from "react"
import { useToken } from "@/utils/context/token"

interface User {
  id: number
  full_name: string
  user_name: string
  email: string
  role: string
  created_at: string
}

type Props = {
  search?: string
}

const useRetrieveUsers = ({ search }: Props) => {
  const { token } = useToken()
  const [data, setData] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("https://be20.online/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: search,
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
  }, [search, token])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveUsers
