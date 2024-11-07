"use client";

import { hitPost } from "@/app/_server/post";
import { PostClass } from "@/models/post";
import { WithId } from "mongodb";
import { useEffect, useRef } from "react";

interface HitCounterProps {
  post: WithId<PostClass>;
}

const HitCounter = ({ post }: HitCounterProps) => {
  const initRef = useRef(false);
  useEffect(() => {
    if (!initRef.current) {
      const hit = async () => {
        await hitPost({ id: post._id.toString() });
      };
      hit();
    }
    initRef.current = true;
  }, [post, initRef]);

  return null;
};

export default HitCounter;
