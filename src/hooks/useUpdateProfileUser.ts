import axios from "axios"
import { useState } from "react"

interface UpdatedUserData {
  UserName?: string
  Domicile?: string
  Email?: string
  PhoneNumber?: number
  Image?: string
}

const useUpdateProfileUser = () => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false)
  const [updateError, setUpdateError] = useState<string | null>(null)

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYyNzA5NDUsInVzZXJJZCI6MX0.z7mfZTF_iiBqUmvAJnqTjD9qgoLS4xdsUZ7_V_NU7Oc"

  const updateUserProfile = async (userData: UpdatedUserData) => {
    try {
      setIsUpdating(true)

      const response = await axios.put(
        "http://54.250.172.137:8080/user",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log("Updated user profile:", response.data)

      return response.data.data
    } catch (error) {
      setUpdateError(`Error updating data: ${error}`)
    } finally {
      setIsUpdating(false)
    }
  }

  return {
    updateUserProfile,
    isUpdating,
    updateError,
  }
}

export default useUpdateProfileUser
