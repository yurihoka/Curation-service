"use client";

import FetchData from "./FetchData";
import NewsListNavigationLink from "./layouts/NewsListNavigationLink";

export default function TopNews() {
  return (
    <div>
      <div className="w-full text-4xl">
        <FetchData
          path="topstories.json?print=pretty"
          startIndex={0}
          endIndex={1}
        />
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-5/6">
          <FetchData
            path="beststories.json?print=pretty"
            startIndex={1}
            endIndex={19}
            category="best"
          />
          <NewsListNavigationLink
            navigationLink={"/moretophn"}
            title="Top HN"
          />
        </div>
        <div className="md:pl-10 pt-5">
          <FetchData
            path="newstories.json?print=pretty"
            title="The Latest"
            startIndex={0}
            endIndex={5}
            category="The Latest"
          />
          <NewsListNavigationLink
            navigationLink={"/morelatest"}
            title="Latest"
          />
        </div>
      </div>
    </div>
  );
}
