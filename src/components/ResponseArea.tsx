const ResponseArea = ({ response }: { response: string }) => {
  return (
    <div className="rounded-md border bg-muted flex-1 p-4 ">
      <p className="p-4 text-justify">{response}</p>
    </div>
  );
};

export default ResponseArea;
