import FetchData from "./components/FetchData";
import TopNews from "./components/TopNews";

export default function Home() {
  return (
    <div>
      <main className="pb-24">
        <section>
          <TopNews />
          <FetchData
            path="askstories.json?print=pretty"
            title="Ask HN"
            startIndex={0}
            endIndex={4}
          />
          <FetchData
            path="showstories.json?print=pretty"
            title="Show HN"
            startIndex={0}
            endIndex={4}
          />
          <FetchData
            path="jobstories.json?print=pretty"
            title="Jobs HN"
            startIndex={0}
            endIndex={4}
          />
        </section>
      </main>
    </div>
  );
}
