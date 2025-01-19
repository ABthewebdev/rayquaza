import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Post } from "../../types";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
  /*   component: Posts,
  validateSearch: (search) => {
    return {
      q: (search.q as string) || "",
    };
  },
  loaderDeps: ({ search: { q } }) => ({ q }),
  loader: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return {
      posts: posts,
    }; */
});

function RouteComponent() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Failed to load posts</p>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        posts?.map((post) => <Link to={`/posts/$postId`} key={post.id}></Link>)
      )}
    </>
  );
}
