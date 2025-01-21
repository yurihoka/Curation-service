import FetchData from "./components/FetchData";
import Header from "./components/layouts/Header";
import NavigationBar from "./components/layouts/NavigationBar";
import TopNews from "./components/TopNews";

export default function Home() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <main>
        <section>
          <TopNews />
          <FetchData
            path="askstories.json?print=pretty"
            title="Ask HN"
            limit={2}
          />
          <FetchData
            path="showstories.json?print=pretty"
            title="Show HN"
            limit={2}
          />
          <FetchData
            path="jobstories.json?print=pretty"
            title="Jobs HN"
            limit={2}
          />
        </section>
      </main>
    </div>
  );
}
