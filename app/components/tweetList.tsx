import React from "react";
import { Tweet } from "react-tweet";
import { components } from "@/app/components/tweetComponents";
import TweetListData from "@/data/tweetList.json";

interface Tweet {
  title: string;
  uri: string;
}

const tweetList: string[] = TweetListData;

export const TweetList = () => {
  const postUrls = tweetList;

  const postList: any[] = [];
  postUrls.forEach((url: string) => {
    const paths = url.split("/");

    const id = paths[paths.length - 1].substring(0, 19);
    postList.push(
      <div key={id} className="px-1">
        <Tweet id={id} components={components} />
      </div>
    );
  });

  return (
    <div className="mt-8 w-[100vw] px-4">
      <h1 className="text-custom-orange text-2xl mb-4 font-black">X Posts</h1>
      <div className="overflow-x-auto border rounded-2xl py-2">
        <div className="flex">{postList}</div>
      </div>
    </div>
  );
};
