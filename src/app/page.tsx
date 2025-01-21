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
          <FetchData path="askstories.json?print=pretty" title="Ask HN" />
          <FetchData path="showstories.json?print=pretty" title="Show HN" />
          <FetchData path="jobstories.json?print=pretty" title="Jobs HN" />
        </section>
      </main>
    </div>
  );
}
