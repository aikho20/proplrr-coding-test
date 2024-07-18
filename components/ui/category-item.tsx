import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { CategoryListProps } from "@/types/type";

export default function CategoryItem({
  id,
  title,
  image,
  isLoading,
}: CategoryListProps) {
  return (
    <Card className="flex flex-row max-w-100 border-bottom transition duration-300 p-0 m-0 bg-slate-100 hover:bg-white border-0 items-center">
      <CardHeader className="relative">
        <img
          src={image}
          alt="Product Image"
          className="w-[40px] h-[40px] bg-contain bg-center "
        />
      </CardHeader>
      <CardContent className="p-4">
        <p className=" text-gray-400 my-1 text-sm">{title}</p>
      </CardContent>
    </Card>
  );
}
