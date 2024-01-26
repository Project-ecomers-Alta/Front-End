import { useState } from "react"

const useRetrieveUsersForm = () => {
  const [search, setSearch] = useState<string | undefined>("")
  const handleSearch = (query: string) => {
    setSearch(query)
  }

  return {
    search,
    handleSearch,
  }
}

export default useRetrieveUsersForm
