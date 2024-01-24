import axios from "axios"
import { useState, useEffect } from "react"

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
  const [data, setData] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYxMTAyODgsInVzZXJJZCI6MX0.ysBfEQN-J7o8CZARPSNkfNy2kEdgbwuX2_lVeKzILXo"

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `http://54.250.172.137:8080/users${search && "/search"}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              user_name: search,
              nama_user: search,
              email: search,
            },
          }
        )

        setData(response.data.data)
      } catch (error) {
        setError("Error fetching data:")
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [search])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveUsers
