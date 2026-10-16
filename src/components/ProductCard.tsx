import type { Product } from "../type";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        loading="lazy"
      />

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;