import SharedPage from "../components/SharedPage";

export default function Jobs() {
  return (
    <SharedPage
      path={"jobstories.json?print=pretty"}
      title={"Jobs HN"}
      startIndex={1}
      endIndex={17}
    />
  );
}
