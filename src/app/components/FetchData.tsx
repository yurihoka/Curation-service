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
  baseUrl: string;
  path: string;
  title: string;
};

export default function FetchData({ baseUrl, path, title }: FetchDataProps) {
  const [stories, setStories] = useState<StoriesDataProps[] | null>(null);

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
        console.error("Error fetching weather data:", error);
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
        <ul>
          {stories.map((story) => (
            <li key={story.id} className="text-black">
              <p>{story.type}</p>
              <p>{story.title}</p>
              <p>by {story.by}</p>
              <p>{story.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
