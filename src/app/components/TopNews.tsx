"use client";

import FetchData from "./FetchData";

export default function TopNews() {
  return (
    <div className="space-y-8">
      <div className="w-full">
        <FetchData
          path="topstories.json?print=pretty"
          title=""
          startIndex={0}
          endIndex={1}
        />
      </div>
      <div className="flex justify-between space-x-8 max-w-screen-xl mx-auto p-4">
        <FetchData
          path="beststories.json?print=pretty"
          title=""
          startIndex={1}
          endIndex={19}
        />
        <FetchData
          path="newstories.json?print=pretty"
          title="The Latest"
          startIndex={0}
          endIndex={5}
        />
      </div>
    </div>
  );
}
