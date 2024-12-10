import type { Product } from "~/types/types";

class ProductService {
  getProductsByCategory(category: string): Product[] {
    switch (category) {
      case "category1":
        return [
          {
            id: "product-1",
            name: "Norcina",
            variants: [],
          },
          {
            id: "product-2",
            name: "Gnocchi",
            variants: [],
          },
          {
            id: "product-3",
            name: "Linguine",
            variants: [],
          },
          {
            id: "product-55",
            name: "Tagliolino",
            variants: [],
          },
        ];
      case "category2":
        return [
          {
            id: "product-5",
            name: "Grigliata",
            variants: [],
          },
          {
            id: "product-6",
            name: "Tagliata",
            variants: [],
          },
          {
            id: "product-7",
            name: "Agnello",
            variants: [],
          },
          {
            id: "product-8",
            name: "Spiedino di pesce",
            variants: [],
          },
          {
            id: "product-9",
            name: "Pollo",
            variants: [],
          },
        ]
      default:
        return []
    }
  }

}

export default new ProductService();
