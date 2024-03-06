import { useEffect, useState } from 'react'

const useFetchData = <T>(
	fetchDataFunction: () => Promise<T>,
	initialData: T | null = null,
) => {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState(initialData)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchDataFunction()
				setData(response)
			} catch (error) {
				setError(error as Error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
		return () => {}
	}, [fetchDataFunction])

	return { loading, data, error }
}

export { useFetchData }
