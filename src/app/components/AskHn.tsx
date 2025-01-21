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

export default function AskHn() {
  const [askStories, setAskStories] = useState<StoriesDataProps[] | null>(null);

  useEffect(() => {
    async function fetchAskStoriesApi() {
      try {
        // id取得
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const askData = data.slice(0, 4);
        console.log(askData);

        // 取得したidを元に各idの詳細取得
        const askStoriesList = [];

        for (let i = 0; i < askData.length; i++) {
          askStoriesList.push(
            fetch(
              `https://hacker-news.firebaseio.com/v0/item/${askData[i]}.json?print=pretty`
            ).then((res) => res.json())
          );
        }
        const fetchData = await Promise.all(askStoriesList);

        setAskStories(fetchData);
        console.log(fetchData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchAskStoriesApi();
  }, []);

  return (
    <div>
      <h1 className="text-black">Ask HN</h1>
      {askStories === null ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {askStories.map((story) => (
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
