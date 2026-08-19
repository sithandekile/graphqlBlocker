import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "./graphql/queries";

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data?.products?.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <p>${product.price}</p>

          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
