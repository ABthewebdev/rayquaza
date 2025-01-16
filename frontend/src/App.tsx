import "./index.css";
import { useQuery } from "@tanstack/react-query";

interface DataProps {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const response = await fetch("http://127.0.0.1:8000/api/posts");
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
}

function App() {
  {
    /* Step 2 With useQuery you have to specify a query key and function */
  }
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occured: {error.message}</p>;
  return (
    <>
      {data?.map((post: DataProps) => (
        <>
          <span>{post.id}</span>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </>
      ))}
    </>
  );
}

export default App;
