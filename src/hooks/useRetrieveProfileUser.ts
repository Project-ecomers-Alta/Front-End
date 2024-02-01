import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  UserName: string;
  Domicile: string;
  Email: string;
  PhoneNumber: number;
  Image: string;
}

const useRetrieveProfileUser = () => {
  const [data, setData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE3MDYyNzA5NDUsInVzZXJJZCI6MX0.z7mfZTF_iiBqUmvAJnqTjD9qgoLS4xdsUZ7_V_NU7Oc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://54.250.172.137:8080/user", {
          headers: {
            Authorization: `Bearer ${token}`,
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
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useRetrieveProfileUser;
