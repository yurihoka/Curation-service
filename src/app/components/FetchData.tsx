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
  title?: string;
  startIndex: number;
  endIndex: number;
  category?: string;
};

export default function FetchData({
  path,
  title,
  startIndex,
  endIndex,
  category,
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

  function formatTimeAgo(timestamp: number) {
    const now = Date.now();
    const diff = now - timestamp * 1000;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }
  }

  return (
    <>
      {stories === null ? (
        <p>Loading...</p>
      ) : (
        <>
          {category === "The Latest" ? (
            // titleが "The Latest" の場合
            <div>
              <h1 className="font-bold border-y border-black py-2 text-xl">
                {title}
              </h1>
              <div className="flex flex-col">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="border-b border-dotted border-black py-4"
                  >
                    <p className="text-sm">{story.type}</p>
                    <p className="text-md font-semibold">{story.title}</p>
                    <p className="text-sm text-gray-400">
                      by {story.by} {formatTimeAgo(story.time)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : category === "best" ? (
            // titleが "best" の場合
            <div>
              <div className="flex flex-wrap gap-4">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="flex-grow basis-[calc(33.333%-1rem)] pb-4 mb-4 border-b border-dotted border-black"
                  >
                    <p className="text-sm">{story.type}</p>
                    <p className="text-md font-semibold">{story.title}</p>
                    <p className="text-sm text-gray-400">
                      by {story.by} {formatTimeAgo(story.time)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // titleが "The Latest" でも "best" でもない場合
            <div>
              <h1 className="font-bold my-4 text-4xl">{title}</h1>
              <div className="flex flex-wrap gap-4">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className={`flex-grow basis-[calc(25%-1rem)] pb-4 mb-4 ${
                      stories.length === 1
                        ? "border-b border-black"
                        : "border-b border-dotted border-black"
                    }`}
                  >
                    <p className="text-sm">{story.type}</p>
                    <p className="text-md font-semibold">{story.title}</p>
                    <p className="text-sm text-gray-400">
                      by {story.by} {formatTimeAgo(story.time)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
