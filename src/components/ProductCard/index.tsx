import { useCart } from "../../Providers/Cart";
import Button from "../Button";
import { CardContainer, Image } from "./styles";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  isOnCart?: boolean;
}

const ProductCard = ({ product, isOnCart = false }: ProductCardProps) => {
  const { id, title, description, price, image } = product;

  const { deleteProduct, addProduct } = useCart();

  return (
    <CardContainer>
      <div>{title}</div>
      <Image src={image}></Image>
      <div>R${price}</div>
      {isOnCart ? (
        <Button deleted={true} onClick={() => deleteProduct(product)}>
          Remove
        </Button>
      ) : (
        <Button onClick={() => addProduct(product)}> Add</Button>
      )}
    </CardContainer>
  );
};

export default ProductCard;
