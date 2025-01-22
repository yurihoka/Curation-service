import NewsListNavigationLink from "../components/layouts/NewsListNavigationLink";
import SharedPage from "../components/SharedPage";

export default function Ask() {
  return (
    <div>
      <SharedPage
        path={"askstories.json?print=pretty"}
        title={"Ask HN"}
        startIndex={1}
        endIndex={17}
      />
      <NewsListNavigationLink navigationLink={"/moreaskhn"} title={"Ask HN"} />
    </div>
  );
}
