"use client";

import { useEffect, useState } from "react";

type StoriesDataProps = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

type FetchDataProps = {
  path: string;
  title: string;
  startIndex: number;
  endIndex: number;
};

export default function FetchData({
  path,
  title,
  startIndex,
  endIndex,
}: FetchDataProps) {
  const [stories, setStories] = useState<StoriesDataProps[] | null>(null);
  const baseUrl = "https://hacker-news.firebaseio.com/v0";

  const url = `${baseUrl}/${path}`;

  useEffect(() => {
    async function fetchStoriesApi() {
      try {
        // id取得
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()).slice(startIndex, endIndex);

        console.log(data);

        // 取得したidを元に各idの詳細取得
        const storiesData = [];

        for (let i = 0; i < data.length; i++) {
          storiesData.push(
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
            ).then((res) => res.json())
          );
        }
        const storiesDataList = await Promise.all(storiesData);

        setStories(storiesDataList);
        console.log(storiesDataList);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    }
    fetchStoriesApi();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {stories === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mb-10 text-black">
          {title === "The Latest" ? (
            // titleが "The Latest" の場合
            <div>
              <h1 className="text-black font-bold border-y-2 border-black py-2">
                {title}
              </h1>
              <div className="flex flex-col gap-4">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="border-b border-dotted border-black p-4"
                  >
                    <h3 className="text-md font-semibold mb-2">{story.type}</h3>
                    <p className="text-sm">{story.title}</p>
                    <p className="text-sm text-gray-400">by {story.by}</p>
                    <p className="text-sm text-gray-400">{story.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // titleが "The Latest" 以外の場合
            <div>
              <h1 className="text-black font-bold">{title}</h1>
              <div className="flex flex-wrap -mx-4">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className={`${
                      stories.length === 1 ? "w-full" : "w-1/4"
                    } px-4 mb-4 border-b border-dotted border-black pb-4`}
                  >
                    <p className="text-sm">{story.type}</p>
                    <p className="text-md font-semibold">{story.title}</p>
                    <p className="text-sm text-gray-400">
                      by {story.by} {story.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
