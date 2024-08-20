import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductsProps = {
  products: Product[];
};

const ProductsPage: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={100} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetch data at build time using getStaticProps
export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
    // Optional: revalidate every 10 seconds to update the static content
    revalidate: 10,
  };
};

export default ProductsPage;
