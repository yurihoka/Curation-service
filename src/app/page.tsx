import AskHn from "./components/FetchData";
import Header from "./components/layouts/Header";
import NavigationBar from "./components/layouts/NavigationBar";

export default function Home() {
  const baseUrl = "https://hacker-news.firebaseio.com/v0";

  return (
    <div>
      <main>
        <Header />
        <NavigationBar />
        {/* <AskHn
          baseUrl={baseUrl}
          path="askstories.json?print=pretty"
          title="AskHN"
        /> */}
        {/* <AskHn
          baseUrl={baseUrl}
          path="showstories.json?print=pretty"
          title="Show HN"
        /> */}
      </main>
    </div>
  );
}
