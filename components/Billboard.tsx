import { Billboard as Billboardtype } from "@/types";
const Billboard = ({ data }: { data: Billboardtype }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <p className="font-bold text-black text-3xl lg:text-6xl sm:text-5xl sm:max-w-xl max-w-xs">
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
