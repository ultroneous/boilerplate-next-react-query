import axios from '@/services/axios-instance'
import { apiRoutes } from '.'

// make call for your apis
export const getPosts = () => axios.get(apiRoutes.posts)
