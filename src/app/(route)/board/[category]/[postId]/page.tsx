import Link from "next/link";
import DeleteButton from "../_views/deleteButton";
import HitCounter from "../_views/hitCounter";
import { getPost } from "@/app/_server/post";

interface PostDetailPageProps {
  params: {
    postId: string;
    category: string;
  };
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const post = await getPost({ id: params.postId });

  if (!post) return <>게시글 없음</>;

  return (
    <>
      <HitCounter post={post} />
      <div className="container max-w-7xl xl:w-[1200px] mx-auto py-40 px-10">
        <div className="px-4 sm:px-0 pt-4 border-t-2 border-black border-solid">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold leading-7 text-black">
                {post.title}
              </h3>
              <p className="mt-1 max-w-2xl text-md leading-6 text-gray-500">
                {post.createdAt.getFullYear()}-{post.createdAt.getMonth() + 1}-
                {post.createdAt.getDate()}
              </p>
            </div>
            <div className="flex">
              <div className="relative whitespace-nowrap pr-4 text-right text-md font-medium sm:pr-4 lg:pr-6">
                <Link
                  href={`/board/${params.category}/${params.postId}/edit`}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  수정
                </Link>
              </div>
              <div className="relative whitespace-nowrap pl-2 text-right text-md font-medium">
                <DeleteButton />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <dl className="">
            <div className="border-t border-gray-300 border-solid px-4 py-6 sm:col-span-2 sm:px-0">
              {post.content}
            </div>
            {post.thumb && (
              <div className="border-t border-gray-300 border-solid px-4 py-6 sm:col-span-2 sm:px-0">
                <img src={post.thumb} />
              </div>
            )}

            <div className="border-t border-gray-950 py-6 mt-10 sm:col-span-2 sm:px-0 flex items-center">
              <dt className="text-md font-medium leading-6 text-gray-900 mr-4">
                이전글
              </dt>
              <dd className="text-md leading-6 text-gray-700">
                <Link href="/">Margot Foster</Link>
              </dd>
            </div>
            <div className="border-y border-gray-300 py-6 sm:col-span-2 sm:px-0 flex items-center">
              <dt className="text-md font-medium leading-6 text-gray-900 mr-4">
                다음글
              </dt>
              <dd className="text-md leading-6 text-gray-700">
                <Link href="/">Margot Foster</Link>
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="rounded-full bg-white px-8 py-3.5 text-lg font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:ring-red-500 hover:text-white"
          >
            <Link href={`/board/${params.category}`}>목록보기</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
