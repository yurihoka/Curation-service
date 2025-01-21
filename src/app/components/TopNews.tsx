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

const TopNews = () => {
  const [stories, setStories] = useState<StoriesDataProps[] | null>(null);

  useEffect(() => {
    async function fetchTopStoriesApi() {
      try {
        // id取得
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const topStories = data.slice(0, 18);

        // 取得したidを元に各idの詳細取得
        const topStoriesList = [];

        for (let i = 0; i < topStories.length; i++) {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${topStories[i]}.json?print=pretty`
          );

          topStoriesList.push(await response.json());
          console.log(topStoriesList);

          setStories(topStoriesList);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchTopStoriesApi();
  }, []);

  return (
    <div>
      {stories === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-black">{stories[0].type}</h1>
          <ul>
            {stories.slice(1, 18).map((story) => (
              <li key={story.id} className="text-black">
                <p>{story.type}</p>
                <p>{story.title}</p>
                <p>by {story.by}</p>
                <p>{story.time}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopNews;
