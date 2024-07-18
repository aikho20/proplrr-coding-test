import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./button";
import { Skeleton } from "./skeleton";

import { BlogEventCardProps } from "@/types/type";

export default function BlogEvenItem({
  id,
  title,
  date,
  image,
  isLoading,
}: BlogEventCardProps) {
  return (
    <Card className="group/product  flex flex-row max-w-100 rounded-lg transition duration-300 p-0 m-0  border-0 hover:bg-slate-100">
      <CardHeader className="relative">
        {isLoading ? (
          <Skeleton className="w-full h-[80px]" />
        ) : (
          <img
            src={image}
            alt="Product Image"
            className="min-w-[80px] min-h-[80px] max-w-[80px] max-h-[80px] bg-cover bg-center"
          />
        )}
      </CardHeader>
      <CardContent className="p-4">
        {!isLoading ? (
          <p className=" text-gray-400 my-1 text-xs">{date}</p>
        ) : (
          <Skeleton className="w-[30px] h-7 my-1" />
        )}

        {!isLoading ? (
          <p className="text-sm font-semibold text-gray-600 mb-3">{title}</p>
        ) : (
          <Skeleton className="w-10 h-5" />
        )}
        <Button
          variant={"link"}
          size={"sm"}
          className="rounded-none text-destructive"
        >
          READ MORE
        </Button>
      </CardContent>
    </Card>
  );
}
