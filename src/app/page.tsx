import FetchData from "./components/FetchData";
import NewsListNavigationLink from "./components/layouts/NewsListNavigationLink";
import TopNews from "./components/TopNews";

export default function Home() {
  return (
    <main>
      <TopNews />
      <FetchData
        path="askstories.json?print=pretty"
        title="Ask HN"
        startIndex={0}
        endIndex={4}
      />
      <NewsListNavigationLink navigationLink={"/moreaskhn"} title={"Ask HN"} />
      <FetchData
        path="showstories.json?print=pretty"
        title="Show HN"
        startIndex={0}
        endIndex={4}
      />
      <NewsListNavigationLink
        navigationLink={"/moreshowhn"}
        title={"Show HN"}
      />
      <FetchData
        path="jobstories.json?print=pretty"
        title="Jobs HN"
        startIndex={0}
        endIndex={4}
      />
      <NewsListNavigationLink
        navigationLink={"/morejobshn"}
        title={"Jobs HN"}
      />
    </main>
  );
}
