import NewsListNavigationLink from "../components/layouts/NewsListNavigationLink";
import SharedPage from "../components/SharedPage";

export default function Jobs() {
  return (
    <div>
      <SharedPage
        path={"showstories.json?print=pretty"}
        title={"Show HN"}
        startIndex={1}
        endIndex={17}
      />
      <NewsListNavigationLink
        navigationLink={"/moreshowhn"}
        title={"Show HN"}
      />
    </div>
  );
}
