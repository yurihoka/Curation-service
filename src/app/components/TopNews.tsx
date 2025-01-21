"use client";

import FetchData from "./FetchData";

export default function TopNews() {
  return (
    <div className="space-y-8">
      <div className="w-full bg-gray-100 p-8">
        <FetchData path="topstories.json?print=pretty" title="TOP" limit={1} />
      </div>
      <div className="flex justify-between space-x-8">
        <FetchData
          path="beststories.json?print=pretty"
          title="best"
          limit={2}
        />
        <FetchData
          path="newstories.json?print=pretty"
          title="The Latest"
          limit={5}
        />
      </div>
    </div>
  );
}
