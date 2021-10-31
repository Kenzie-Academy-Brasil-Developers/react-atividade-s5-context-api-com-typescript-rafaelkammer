import ProductCard from "../ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsProps {
  products: Product[];
  isOnCart?: boolean;
}

const Products = ({ products, isOnCart = false }: ProductsProps) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} isOnCart={isOnCart} />
      ))}
    </>
  );
};

export default Products;
