import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../../types";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/posts/$postId")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error...</div>,
});

function RouteComponent() {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery<Post>({
    queryKey: [`/api/posts/${post?.id}`],
  });
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">Failed to load post</p>
      </div>
    );
  }
  return (
    <div>
      {isLoading ? <p>Loading...</p> : post ? <p>{post.title}</p> : null}
    </div>
  );
}
