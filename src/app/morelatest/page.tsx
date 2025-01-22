import SharedPage from "../components/SharedPage";

export default function MoreLatest() {
  return (
    <SharedPage
      path={"newstories.json?print=pretty"}
      title={"Latest"}
      startIndex={1}
      endIndex={33}
    />
  );
}
