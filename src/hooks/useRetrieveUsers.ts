import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  id: number;
  full_name: string;
  user_name: string;
  email: string;
  role: string;
  created_at: string;
}

type Props = {
  search?: string;
};

const useRetrieveUsers = ({ search }: Props) => {
  const [data, setData] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYyNzA5NDUsInVzZXJJZCI6MX0.z7mfZTF_iiBqUmvAJnqTjD9qgoLS4xdsUZ7_V_NU7Oc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://54.250.172.137:8080/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: search,
          },
        });

        setData(response.data.data);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useRetrieveUsers;
