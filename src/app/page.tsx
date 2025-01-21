import AskHn from "./components/AskHn";
import Header from "./components/layouts/Header";
import NavigationBar from "./components/layouts/NavigationBar";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <NavigationBar />
        {/* <AskHn /> */}
      </main>
    </div>
  );
}
