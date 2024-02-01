import axios from "axios"
import { useState, useEffect } from "react"
import { useToken } from "@/utils/context/token"

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
  const { token } = useToken()
  const [data, setData] = useState<Order[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("https://be20.online/orders", {
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

export default useRetrieveOrders
