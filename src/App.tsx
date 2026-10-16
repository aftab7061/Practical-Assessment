import { useMemo, useState } from "react";
import { products } from "./data";
import ProductFilters from "./components/ProductFilter";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortByPrice, setSortByPrice] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortByPrice) {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    return result;
  }, [search, category, sortByPrice]);

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">DISCOVER YOUR NEXT FAVORITE</p>
        <h1>Product Explorer</h1>
        <p className="subtitle">
          Explore products, compare prices, and find what you need.
        </p>
      </header>

      <section className="catalog">
        <div className="catalog-heading">
          <div>
            <h2>Explore Products</h2>
            <p>{filteredProducts.length} products found</p>
          </div>

          <label className="sort-control">
            <input
              type="checkbox"
              checked={sortByPrice}
              onChange={(event) =>
                setSortByPrice(event.target.checked)
              }
            />
            Price: Low to High
          </label>
        </div>

        <ProductFilters
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />

        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}

export default App;