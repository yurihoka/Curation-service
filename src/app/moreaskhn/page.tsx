import SharedPage from "../components/SharedPage";

export default function MoreAskHn() {
  return (
    <SharedPage
      path={"askstories.json?print=pretty"}
      title={"Ask HN"}
      startIndex={1}
      endIndex={33}
    />
  );
}
