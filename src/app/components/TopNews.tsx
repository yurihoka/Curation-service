"use client";

import FetchData from "./FetchData";

export default function TopNews() {
  return (
    <>
      <FetchData path="topstories.json?print=pretty" title="TOP" limit={2} />
      <FetchData path="topstories.json?print=pretty" title="best" limit={2}/>
      <FetchData path="askstories.json?print=pretty" title="The Latest" limit={2}/>
    </>
  );
}
