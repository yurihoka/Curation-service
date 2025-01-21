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
        </section>
      </main>
    </div>
  );
}
