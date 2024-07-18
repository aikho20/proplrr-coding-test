import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import {
  DeleteIcon,
  Minus,
  MinusCircle,
  Plus,
  PlusCircle,
  Trash,
  Trash2Icon,
} from "lucide-react";
import { ProductCardProps } from "@/types/type";

export default function ProductCard({
  id,
  productName,
  price,
  image,
  isLoading,
}: ProductCardProps) {
  return (
    <Card className="group/product shadow-sm flex flex-row max-w-100 rounded-lg transition duration-300 p-0 m-0 bg-slate-100 border-0 overflow-show p-2">
      <CardContent className="p-4">
        {!isLoading ? (
          <p className=" text-gray-400 my-1 text-sm">{productName}</p>
        ) : (
          <Skeleton className="w-[30] h-7 my-1" />
        )}

        {!isLoading ? (
          <p className="text-lg font-semibold text-gray-600 mb-6">{price}</p>
        ) : (
          <Skeleton className="w-10 h-5" />
        )}
        <Button
          variant={"destructive"}
          size={"sm"}
          className="rounded-none shadow-lg"
        >
          BUY NOW
        </Button>
      </CardContent>
      <CardHeader className="relative">
        {isLoading ? (
          <Skeleton className="w-full h-[200px]" />
        ) : (
          <img
            src={image}
            alt="Product Image"
            className="w-[180px] h-[120px] bg-contain bg-center group-hover/product:scale-150 duration-200"
          />
        )}
      </CardHeader>
    </Card>
  );
}
