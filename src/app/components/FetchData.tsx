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
};

export default function FetchData({ path, title }: FetchDataProps) {
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

        const data = (await response.json()).slice(0, 4);

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
    <div>
      <h1 className="text-black font-bold">{title}</h1>
      {stories === null ? (
        <p>Loading...</p>
      ) : (
        <div className="mb-10 text-black">
          <div className="grid grid-cols-4 gap-4">
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
      )}
    </div>
  );
}
