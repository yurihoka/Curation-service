import FetchData from "./components/FetchData";
import Header from "./components/layouts/Header";
import NavigationBar from "./components/layouts/NavigationBar";

export default function Home() {
  const baseUrl = "https://hacker-news.firebaseio.com/v0";

  return (
    <div>
      <main>
        <Header />
        <NavigationBar />
        <FetchData
          baseUrl={baseUrl}
          path="askstories.json?print=pretty"
          title="Ask HN"
        />
        <FetchData
          baseUrl={baseUrl}
          path="showstories.json?print=pretty"
          title="Show HN"
        />
        <FetchData
          baseUrl={baseUrl}
          path="jobstories.json?print=pretty"
          title="Jobs HN"
        />
      </main>
    </div>
  );
}
