import FetchData from "./FetchData";

type FetchDataProps = {
  path: string;
  title: string;
  startIndex: number;
  endIndex: number;
};

export default function SharedPage({
  path,
  title,
  startIndex,
  endIndex,
}: FetchDataProps) {
  return (
    <div>
      <FetchData path={path} title={title} startIndex={0} endIndex={1} />
      <FetchData
        path={path}
        title={""}
        startIndex={startIndex}
        endIndex={endIndex}
      />
    </div>
  );
}
