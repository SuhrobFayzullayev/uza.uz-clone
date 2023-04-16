import NotFoundData from "./notFoundData";
import PostCard from "./postCard";
import { TPosts } from "@/type";

export default function PostContent({ data }: { data: TPosts[] }) {
  return (
    <>
      {data?.length == 0 ? (
        <NotFoundData />
      ) : (
        <div className="w-full bg-white py-8 pl-20 pr-8">
          {data?.map((v, i) => (
            <PostCard key={v.id} allData={data} index={i} data={v} />
          ))}
        </div>
      )}
    </>
  );
}
