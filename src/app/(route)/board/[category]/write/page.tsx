import WriteForm from "./_views/writeForm";

interface WritePageProps {
  params: {
    category: string;
  };
}

const WritePage = async ({ params }: WritePageProps) => {
  return (
    <>
      <div className="container max-w-7xl xl:w-[1200px] mx-auto py-40 px-10">
        <WriteForm category={params.category} />
      </div>
    </>
  );
};
export default WritePage;
