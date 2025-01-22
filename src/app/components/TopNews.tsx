"use client";

import FetchData from "./FetchData";
import NewsListNavigationLink from "./layouts/NewsListNavigationLink";

export default function TopNews() {
  return (
    <div>
      <div className="w-full text-4xl">
        <FetchData
          path="topstories.json?print=pretty"
          title=""
          startIndex={0}
          endIndex={1}
        />
      </div>
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <FetchData
          path="beststories.json?print=pretty"
          title=""
          startIndex={1}
          endIndex={19}
          category="best"
        />
        <FetchData
          path="newstories.json?print=pretty"
          title="The Latest"
          startIndex={0}
          endIndex={5}
          category="The Latest"
        />
      </div>
      <NewsListNavigationLink navigationLink={"/moretophn"} title="Top HN" />
    </div>
  );
}
