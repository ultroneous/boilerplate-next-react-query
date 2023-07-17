import { useQuery } from '@tanstack/react-query'
import { getPosts, readPosts } from '@/services/posts'
import cacheKeys from '@/constants/cache-keys'

// declare here your hook logic

export const useGetPosts = () => useQuery([cacheKeys.posts], getPosts)
