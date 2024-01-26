import axios from "axios"
import { useState, useEffect } from "react"

interface Product {
  id: number
  name: string
  price: number
  category: string
  description: string
  details_images: string
  user: {
    user_name: string
    provinci: string
    shop_image: string
  }
}

const useRetrieveDetailProduct = (id: number) => {
  const [data, setData] = useState<Product | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          `http://54.250.172.137:8080/product/${id}`
        )

        setData(response.data.data)
      } catch (error) {
        setError(`Error fetching data: ${error}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveDetailProduct
