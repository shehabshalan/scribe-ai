import ReactMarkdown from "react-markdown";

const ResponseArea = ({ response }: { response: string }) => {
  return (
    <div className="rounded-md border bg-muted flex-1 p-4 ">
      <div className="p-4 text-justify">
        <ReactMarkdown children={response} />
      </div>
    </div>
  );
};

export default ResponseArea;
