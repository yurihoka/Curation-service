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
  const [stories, setStories] = useState<StoriesDataProps[]>([
    {
      by: "",
      descendants: 0,
      id: 0,
      kids: [],
      score: 0,
      time: 0,
      title: "",
      type: "",
      url: "",
    },
  ]);

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
        // 仮で5つ取得
        const topStories = data.slice(0, 5);
        console.log(topStories);

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
    <>
      {stories.map((story, index) => (
        <div key={index}>
          <h2 className="text-black">{story.type}</h2>
          <p className="text-black">{story.title}</p>
          <p className="text-black">by {story.by}</p>
          <p className="text-black">{story.time}</p>
        </div>
      ))}
    </>
  );
};

export default TopNews;
