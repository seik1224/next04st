import Link from "next/link";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

interface PaginationProps {
  total: number;
  currentCount: number;
  pageNumber: number;
  limit: number;
  groupLimit: number;
}

const getPageNumber = (page: string | null) => {
  try {
    if (!page || page === "0") throw new Error(); // 에러 발생시켜서 catch문에 있는걸 실행
    return parseInt(page);
  } catch {
    redirect("?page=1");
  }
};

const Pagination = ({
  pageNumber,
  total,
  limit,
  groupLimit,
  currentCount,
  children,
}: PropsWithChildren<PaginationProps>) => {
  const lastPageNumber = Math.max(Math.ceil(total / limit), 1);
  const pageGroup = Math.ceil(pageNumber / groupLimit) - 1;
  const lastPageGroup = Math.ceil(lastPageNumber / groupLimit) - 1;
  const groupCount =
    pageGroup === lastPageGroup
      ? groupLimit -
        Math.floor(
          ((lastPageGroup + 1) * groupLimit * limit - total) / groupLimit
        )
      : groupLimit;

  if (pageNumber !== 1 && !currentCount) {
    redirect(`?page=${lastPageNumber}`);
  }

  return (
    <div className="flex mt-8 items-center justify-center  bg-white py-3">
      <div className="flex flex-col md:flex-row sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md "
            aria-label="Pagination"
          >
            {pageNumber === 1 && (
              <>
                <div className="relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-300 cursor-default">
                  <span className="sr-only">First</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-300 cursor-default">
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </>
            )}
            {pageNumber !== 1 && (
              <>
                <Link
                  href="?page=1"
                  className="relative inline-flex items-center rounded-l-md px-2 py-1 text-black "
                >
                  <span className="sr-only">First</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                    />
                  </svg>
                </Link>
                <Link
                  href={`?page=${pageNumber - 1}`}
                  className="relative inline-flex items-center rounded-l-md px-2 py-1 text-black "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </Link>
              </>
            )}
            {[...Array(groupCount)].map((_, page) => {
              const currentPage = groupLimit * pageGroup + page + 1;
              return (
                <Link
                  key={currentPage}
                  href={`?page=${currentPage}`}
                  aria-current="page"
                  style={{
                    margin: "0 8px",
                  }}
                  className={
                    pageNumber === currentPage
                      ? "relative z-10 inline-flex items-center  px-2 py-1 text-lg font-bold text-[--mc-400] border-b-2 border-solid border-[--mc-400]"
                      : "relative inline-flex items-center px-2 py-1 text-lg font-bold text-black hover:text-[--mc-400]"
                  }
                >
                  {currentPage}
                </Link>
              );
            })}
            {pageNumber === lastPageNumber && (
              <>
                <div className="relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-300 cursor-default">
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-300 cursor-default">
                  <span className="sr-only">Last</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </>
            )}
            {pageNumber !== lastPageNumber && (
              <>
                <Link
                  href={`?page=${pageNumber + 1}`}
                  className="relative inline-flex items-center rounded-r-md px-2 py-1 text-black "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
                <Link
                  href={`?page=${lastPageNumber}`}
                  className="relative inline-flex items-center rounded-r-md px-2 py-1 text-black "
                >
                  <span className="sr-only">Last</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </>
            )}
          </nav>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Pagination;
