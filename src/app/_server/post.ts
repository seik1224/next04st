"use server";

import dbConnect from "@/libs/mongoose";
import { PostModel } from "@/models/post";
import { revalidatePath } from "next/cache";

/*
    [ 데이터 삽입 ]
*/

/*
    [ 게시물 가져오기 getPosts ]
*/

export interface GetPosts {
  category?: string;
  skip: number;
  limit: number;
}

export const getPosts = async ({ category, skip, limit }: GetPosts) => {};

/*
    [ 게시물 1개 가져오기 getPost ]
*/

export interface GetPost {
  id: string;
}

export const getPost = async ({ id }: GetPost) => {};

/*
    [ 게시물 만들기 createPost ]
*/

export interface CreatePost {
  title: string;
  content: string;
  thumb: string;
  category: string;
  password: string;
  priority: number;
  noticeStatus: boolean;
}

export const createPost = async ({
  title,
  content,
  thumb,
  category,
  password,
  priority,
  noticeStatus,
}: CreatePost) => {
  await dbConnect();

  const post = await new PostModel({
    category: category,
    title: title,
    content: content,
    createdAt: new Date(),
    hit: 0,
    priority: priority,
    thumb: thumb,
    password: password,
    noticeStatus: noticeStatus,
  }).save();

  revalidatePath(`/board/${category}`);
  return post.toObject(); // onSuccess(result) 인수로 담아진다.
};

/*
    [ 게시물 수정 updatePost ]
*/

export interface UpdatePost {
  _id: string;
  title: string;
  content: string;
  thumb: string;
  password: string;
  priority: number;
  noticeStatus: boolean;
}

export const updatePost = async ({
  _id,
  title,
  content,
  thumb,
  password,
  priority,
  noticeStatus,
}: UpdatePost) => {
  await dbConnect();
  const post = await PostModel.findOne({
    _id,
    deletedAt: { $exists: false },
  });
  if (!post) throw new Error();

  await post.updateOne({
    title: title,
    content: content,
    thumb: thumb,
    password: password,
    priority: priority,
    noticeStatus: noticeStatus,
  });

  revalidatePath(`/board/${post.category}`);
  return post.toObject();
};

/*
    [ 게시물 삭제 deletePost ]
*/

export interface DeletePost {
  id: string;
}

export const deletePost = async ({ id }: DeletePost) => {
  await dbConnect();
  const post = await PostModel.findOne({
    _id: id,
    deletedAt: { $exists: false },
  });
  if (!post) throw new Error();

  await post.updateOne({
    deletedAt: new Date(),
  });

  revalidatePath(`/board/${post.category}`);
  return;
};
