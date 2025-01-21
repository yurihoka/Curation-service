"use client";

import FetchData from "./FetchData";

export default function TopNews() {
  return (
    <>
      <FetchData path="topstories.json?print=pretty" title="TOP" />
      <FetchData path="topstories.json?print=pretty" title="best" />
      <FetchData path="askstories.json?print=pretty" title="The Latest" />
    </>
  );
}
