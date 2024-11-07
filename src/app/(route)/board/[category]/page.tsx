import Link from "next/link";
import { redirect } from "next/navigation";
import { getPosts } from "@/app/_server/post";
import ListView from "./_views/listView";
import Pagination from "./_views/pagination";
import InsertButton from "./_views/insertButton";

interface BoardCategoryPageProps {
  params: {
    category: string; // URL의 [category] 부분이 여기로 자동 전달됨
  };
  searchParams: {
    page: string; // URL의 ?page=1 같은 쿼리 파라미터가 자동으로 전달됨
  };
}

/*
  [ getPageNumber ]
  페이지네이션을 위한 페이지 번호를 처리하는 유틸리티 함수
*/
const getPageNumber = (page: string | null) => {
  try {
    if (!page || page === "0") throw new Error();
    return parseInt(page);
  } catch {
    redirect("?page=1");
  }
};

const BoardCategoryPage = async ({
  params,
  searchParams,
}: BoardCategoryPageProps) => {
  /*
    [params] 
    - URL의 [category] 부분이 여기로 자동 전달됨
    - [category] 동적 라우팅(/posts/[id])을 사용할때 기본적으로 제공되는 기능
    - URL : board/notice -> params.category : 'notice'
    - 서버 컴포넌트에서만 직접 props로 받아서 사용 가능하며 클라이언트 컴포넌트에서는 useParams() 훅을 사용

    [searchParams]
    - URL의 쿼리 파라미터를 자동으로 객체 형태로 전달받음
    - 동적 라우팅과 관계 없이 작동
    - 서버 컴포넌트에서만 직접 props로 받아서 사용 가능하며 클라이언트 컴포넌트에서는 useSearchParams() 훅을 사용
  */
  // console.log(params, searchParams); // use client가 아니기 때문에 서버콘솔로 확인

  const pageNumber = getPageNumber(searchParams.page);
  const limit = 5; // 한 페이지에 표시될 게시물의 수를 정의
  const groupLimit = 5; // 페이지 네비게이션에 표시될 페이지 번호의 개수를 정의 < [1] [2] [3] [4] [5] >

  /*
    [ getPosts ]
    현재 getPosts는 아래와 같이 인자를 삽입하여 데이터를 가져오려고 합니다.
    아래에 맞게 getPosts API를 만들어주세요.
  */
  const { total, items: posts } = await getPosts({
    category: params.category,
    skip: (pageNumber - 1) * limit,
    limit,
  });

  return (
    <>
      <div className="container max-w-7xl xl:w-[1200px] mx-auto py-40 px-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              BoardCategoryPage
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              공지게시판 : 공지기능, 관리자만 업로드 가능, 게시판 댓글
              기능(로그인 안하면 댓글 불가능)
            </p>
          </div>
        </div>
        <ListView
          posts={posts}
          category={params.category}
          total={total}
          pageNumber={pageNumber}
          limit={limit}
        />
        <Pagination
          total={total}
          pageNumber={pageNumber}
          groupLimit={groupLimit}
          limit={limit}
          currentCount={posts.length}
        >
          <div className="flex mt-12 md:mt-0 md:ml-auto gap-4">
            <InsertButton category={params.category} />
            <Link
              href={`${params.category}/write`}
              className="block rounded-lg bg-[--mc-400] px-6 py-3 text-center text-lg font-bold text-white hover:bg-[--mc-400]"
            >
              글작성
            </Link>
          </div>
        </Pagination>
      </div>
    </>
  );
};

export default BoardCategoryPage;
