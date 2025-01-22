"use client";

import FetchData from "./FetchData";

export default function TopNews() {
  return (
    <>
      <FetchData path="topstories.json?print=pretty" title="TOP" startIndex={0} endIndex={2} />
      <FetchData path="topstories.json?print=pretty" title="best" startIndex={0} endIndex={2}/>
      <FetchData path="askstories.json?print=pretty" title="The Latest" startIndex={0} endIndex={2}/>
    </>
  );
}
