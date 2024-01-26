import { useState } from "react"

const useRetrieveOrdersForm = () => {
  const [search, setSearch] = useState<string | undefined>("")
  const handleSearch = (query: string) => {
    setSearch(query)
  }

  return {
    search,
    handleSearch,
  }
}

export default useRetrieveOrdersForm
