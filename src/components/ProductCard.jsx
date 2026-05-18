import Image from "next/image";

const ProductCard = ({ product }) => {
  const { name, price, stock, brand, description, image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={image} width={300} height={200} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price: ${price}</p>
        <p>Stock: {stock}</p>
        <p>Brand: {brand}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
