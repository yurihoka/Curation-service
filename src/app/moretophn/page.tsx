import SharedPage from "../components/SharedPage";

export default function MoreTopHn() {
  return (
    <SharedPage
      path={"topstories.json?print=pretty"}
      title={"Top HN"}
      startIndex={1}
      endIndex={33}
    />
  );
}
