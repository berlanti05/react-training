import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refetch, setRefetch] = useState(0);

  useEffect(() => {
    let ignore = false;

    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        if (!ignore) {
          setData(result);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      ignore = true;
    };
  }, [url, refetch]);

  return {
    data,
    loading,
    error,
    refetch: () => setRefetch((prev) => prev + 1),
  };
}

export default useFetch;
