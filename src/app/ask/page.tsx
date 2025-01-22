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
    </div>
  );
}
