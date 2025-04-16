import { useEffect, useState } from "react"

export const useFetch = <T>(url: string, errorMessage: string) => {
  const [data, setData] = useState<T>([] as T)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        setError(null)
        const resp = await fetch(url)
        if (!resp.ok) {
          throw new Error(errorMessage)
        }
        const body: T = await resp.json()
        setData(body)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [url])

  return { data, loading, error }
}
