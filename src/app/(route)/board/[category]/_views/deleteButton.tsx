"use client";

type DeleteButtonParams = Record<"category" | "postId", string>;

interface DeleteButtonProps {
  postId?: string;
}

const DeleteButton = ({ postId }: DeleteButtonProps) => {
  return <button className=" text-red-500 hover:text-red-400">삭제</button>;
};

export default DeleteButton;
