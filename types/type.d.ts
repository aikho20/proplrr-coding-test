export interface ProductCardProps {
  id: string;
  productName: string;
  price: string;
  image: string;
  isLoading?: boolean;
}

export interface BlogEventCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  isLoading?: boolean;
}

export interface CategoryListProps {
  id: string;
  title: string;
  image: string;
  isLoading?: boolean;
}
