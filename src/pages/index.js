import { useGetPosts } from '@/hooks/posts'
import Link from 'next/link'

export default function Home() {
  const { data: postsData, isLoading, isError ,refetch} = useGetPosts()

  if (isLoading) {
    return <>Loading data...</>
  }

  // if you want to refetch data then call 
  //refetch()
  
  return (
    <div className="max-w-4xl m-auto my-6">
      <div>
        {postsData.data.map((value) => (
          <div className="mb-3 border-black border-2 p-4 rounded-md">
            <p className="text-2xl">{value.title}</p>
            <p className="text-md">{value.body}</p>
            <Link href={`/`} className="text-blue-500 mt-6">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
