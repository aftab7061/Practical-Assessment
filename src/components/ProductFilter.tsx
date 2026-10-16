interface ProductFiltersProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

function ProductFilters({
  search,
  category,
  onSearchChange,
  onCategoryChange
}: ProductFiltersProps) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-label="Search products by name"
      />

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
  );
}

export default ProductFilters;