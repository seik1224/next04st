import { PostClass } from "@/models/post";
// import DeleteButton from "../[category]/[postId]/_views/delete-button";
import Link from "next/link";
import { WithId } from "mongodb";

interface ListViewProps {
  total: number;
  posts: WithId<PostClass>[];
  category: string;
  pageNumber: number;
  limit: number;
}

const ListView = ({
  total,
  posts,
  category,
  pageNumber,
  limit,
}: ListViewProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-gray-700">
            <span className=" text-[--mc-400] font-semibold">0</span>
            건의 게시물이 있습니다.
          </p>
        </div>
        <div className="flex">
          <div className="flex relative">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="h-full border-0 bg-transparent py-0 pl-3 pr-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[--mc-400] sm:text-md"
              >
                <option value="title">제목</option>
                <option value="content">내용</option>
              </select>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-[300px] rounded-lg border-0 py-3 pl-24 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[--mc-400] sm:text-md sm:leading-6 "
              placeholder="검색어를 입력하세요."
            />
            <div className="absolute inset-y-0 right-0 flex py-3 pr-2">
              <input
                type="submit"
                id="search-send"
                value=""
                className="w-6 h-6 cursor-pointer"
                style={{
                  background:
                    "url(/images/sub/board/search_bar_ico.svg) no-repeat center",
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-300 divide-solid  border-solid border-black border-b">
              <thead>
                <tr
                  style={{
                    borderTop: "2px solid #000",
                  }}
                >
                  <th
                    scope="col"
                    style={{ width: "8%" }}
                    className="py-6 pr-3 text-md font-semibold text-gray-900 text-center"
                  >
                    번호
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-6 text-left text-md font-semibold text-gray-900"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    style={{ width: "5%" }}
                    className="relative py-6 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                  <th
                    scope="col"
                    style={{ width: "5%" }}
                    className="relative py-6 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Remove</span>
                  </th>
                  <th
                    scope="col"
                    style={{ width: "10%" }}
                    className="px-3 py-3.5 text-md font-semibold text-gray-900 hidden md:table-cell text-center"
                  >
                    작성일
                  </th>
                  <th
                    scope="col"
                    style={{ width: "8%" }}
                    className="px-3 py-3.5 text-md font-semibold text-gray-900 hidden md:table-cell text-center"
                  >
                    조회
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 divide-solid bg-white">
                <tr>
                  <td className="whitespace-nowrap py-6 pr-3 text-md font-medium text-black text-center">
                    1
                  </td>
                  <td className="whitespace-nowrap px-3 py-6 text-md text-black">
                    <div className="w-full max-w-[100px] md:max-w-[300px]">
                      <Link
                        className="inline-block w-full truncate align-bottom hover:underline"
                        href="#"
                      >
                        게시물 제목
                      </Link>
                    </div>
                  </td>
                  <td className="relative whitespace-nowrap py-6 pl-3 pr-2 text-right text-md font-medium sm:pr-2 lg:pr-4">
                    <Link
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      수정
                    </Link>
                  </td>
                  <td className="relative whitespace-nowrap py-6 pl-3 pr-4 text-right text-md font-medium sm:pr-6 lg:pr-8">
                    삭제
                  </td>
                  <td className="whitespace-nowrap px-3 py-6 text-md text-gray-500 hidden md:table-cell text-center">
                    2024-10-28
                  </td>
                  <td className="whitespace-nowrap px-3 py-6 text-md text-gray-500 hidden md:table-cell text-center">
                    0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
