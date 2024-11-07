import EditForm from "./_views/editForm";
import { getPost } from "@/app/_server/post";

interface WritePageProps {
  params: {
    category: string;
    postId: string;
  };
}

const WritePage = async ({ params }: WritePageProps) => {
  const post = await getPost({ id: params.postId });

  if (!post) return <>게시글 없음</>;

  return (
    <>
      <div className="container max-w-7xl xl:w-[1200px] mx-auto py-40 px-10">
        <EditForm postId={params.postId} post={post} />
      </div>
    </>
  );
};
export default WritePage;
