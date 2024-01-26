import axios from "axios"
import { useState, useEffect } from "react"

interface Order {
  id: number
  order_id: number
  product_name: string
  quantity: number
  created_at: string
  credit_card: string
  sub_total: number
  addres: string
  status: string
}

type Props = {
  search?: string | number
}

const useRetrieveOrders = ({ search }: Props) => {
  const [data, setData] = useState<Order[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYxOTQ1NTIsInVzZXJJZCI6MX0.wkRnMdOIYZIOFhJqln0d9W0e7fCDSK8nMhQ0ciOTh_g"

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("http://54.250.172.137:8080/users", {
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
  }, [search])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveOrders
