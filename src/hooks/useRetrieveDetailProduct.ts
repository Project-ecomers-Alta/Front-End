import axios from "axios"
import { useState, useEffect } from "react"

interface Product {
  id: number
  product_id: number
  product_name: string
  price: number
  category: string
  description: string
  details_images: string
  name_user: string
  province: string
}

interface Image {
  product_id: number
  images: string
}

const useRetrieveDetailProduct = () => {
  const [data, setData] = useState<Product[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYxODUzMzEsInVzZXJJZCI6MX0.VlIMdrxxsqpPoP-59e0hen8qm0WjIq38RyjiCn7Awto"

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          "https://virtserver.swaggerhub.com/DWIMIRANDAA/E-CommerceApp/1.0.0/product/1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        setData(response.data.data)
      } catch (error) {
        setError(`Error fetching data: ${error}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}

export default useRetrieveDetailProduct
