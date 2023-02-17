import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

type UseTopicsDataParams = {
	page: number
	limit: number
	tab?: 'all' | 'ask' | 'share' | 'job' | 'good'
	mdrender?: 'true' | 'false'
}

export function useTopicsData({ page, limit, tab }: UseTopicsDataParams) {
	const {
		data,
		error,
		isLoading
	} = useSWR(`https://cnodejs.org/api/v1/topics?page=${page}&limit=${limit}&tab=${tab}`, fetcher)

	return {
		topicsData: data,
		isLoading,
		isError: error
	}
}