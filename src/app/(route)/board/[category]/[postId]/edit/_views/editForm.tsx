"use client";

import { PostClass } from "@/models/post";
import Link from "next/link";

interface EditFormProps {
  post: PostClass;
  postId: string;
}

const EditForm = ({ postId, post }: EditFormProps) => {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 ">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="flex-1">
                <label
                  htmlFor="title"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  글 제목
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[--mc-400] sm:max-w-md">
                    <input
                      type="text"
                      className="block sm:w-[400px] flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6"
                      placeholder="글제목을 입력해주세요."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-10 items-start">
              <div>
                <label
                  htmlFor="pwd"
                  className="block text-md font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[--mc-400] sm:max-w-md">
                    <input
                      type="password"
                      className="block sm:w-[200px] flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <label
                htmlFor="content"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                글내용
              </label>
              <div className="mt-2">
                <textarea
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <div>
          <div className="mr-4">
            <label
              htmlFor="noticeStatus"
              className="block text-md font-medium leading-6 text-gray-900 whitespace-nowrap"
            >
              공지여부
            </label>
            <div className="mt-2">
              <input
                type="checkbox"
                className="h-12 w-12 py-3 rounded border-0 border-transparent ring-gray-300 ring-1"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end ml-auto gap-x-6">
          <Link
            href={`/board/${post.category}`}
            type="button"
            className="text-lg font-bold leading-6 text-gray-900"
          >
            취소
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 text-center text-lg font-bold text-white hover:bg-red-500"
          >
            글수정
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
