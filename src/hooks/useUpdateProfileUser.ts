import { useState } from "react"

const useUpdateProfileUser = () => {
  const [update, setUpdate] = useState<string | number>("")
  const handleUpdate = (query: string) => {
    setUpdate(query)
  }

  return {
    update,
    handleUpdate,
  }
}

export default useUpdateProfileUser
