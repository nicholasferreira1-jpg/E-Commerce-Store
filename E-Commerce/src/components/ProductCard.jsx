import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <img src="https://placehold.co/600x400" alt={name} className="product-image" />
      <h3 className="product-name">Video Game</h3>
      <p className="product-description">PS5 Slim 2024</p>
      <p className="product-price">$349.99</p>
    </div>
  );
}

export default ProductCard;