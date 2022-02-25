import React from "react";
import {
  Container,
  FilterSection,
  FilterSectionTitle,
} from "./FiltersPanel.styles";

interface Category {
  id: number;
  name: string;
}

interface Filters {
  category?: number[];
}

const FiltersPanel = () => {
  const [categories, setCategories] = React.useState<Category[]>([
    {
      id: Math.random(),
      name: "Hardware",
    },
    {
      id: Math.random(),
      name: "Games",
    },
    {
      id: Math.random(),
      name: "Eletronics",
    },
  ]);

  const [filters, setFilters] = React.useState<Filters>({
    category: [],
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleFilterChanges = (event: { target: any }) => {
    const { target } = event;
    const { value, name } = target as HTMLInputElement;

    if (name === "category") {
      setFilters((prev) => {
        const { category } = prev;
        if (category.includes(Number(value))) {
          return {
            ...prev,
            [name]: category.filter((el) => el !== Number(value)),
          };
        }

        return {
          ...prev,
          [name]: [...category, Number(value)],
        };
      });
    }
  };

  return (
    <Container>
      <form ref={formRef}>
        <FilterSection>
          <FilterSectionTitle>Categories</FilterSectionTitle>
          {categories.map((category) => (
            <label
              htmlFor={category.id.toString()}
              key={category.id.toString()}
            >
              <input
                type="checkbox"
                name="category"
                id={category.id.toString()}
                value={category.id}
                onChange={handleFilterChanges}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </FilterSection>
      </form>
    </Container>
  );
};

export default FiltersPanel;
