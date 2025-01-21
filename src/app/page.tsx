import FetchData from "./components/FetchData";
import Header from "./components/layouts/Header";
import NavigationBar from "./components/layouts/NavigationBar";
import TopNews from "./components/TopNews";

export default function Home() {
  const baseUrl = "https://hacker-news.firebaseio.com/v0";

  return (
    <div>
      <Header />
      <NavigationBar />
      <main>
        <section>
          <TopNews />
        </section>
      </main>
    </div>
  );
}
