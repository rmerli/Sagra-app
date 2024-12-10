import type { Menu } from "~/types/types";

class MenuService {
  getMenu(menu: string): Menu | null {
    switch (menu) {
      case "1":
        return {
          id: menu,
          name: 'Menu' + menu,
          startDate: new Date("2024-12-25"),
          endDate: new Date("2024-12-28"),
          categories: [
            {
              id: "category1",
              name: "Primi",
              sort: 1,
              products: [
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
              ]
            },
            {
              id: "category2",
              name: "Secondi",
              sort: 2,
              products: [
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
              ]
            }
          ]
        };
      case "2":
        return {
          id: menu,
          name: 'Menu' + menu,
          startDate: new Date("2024-12-29"),
          endDate: new Date("2024-12-31"),
          categories: [
            {
              id: "category1",
              name: "Primi",
              sort: 1,
              products: [
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
              ]
            },
            {
              id: "category2",
              name: "Secondi",
              sort: 2,
              products: [
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
              ]
            }
          ]
        };
      default:
        return null
    }
  }

  getAllMenus(): Menu[] {
    var menus: Menu[] = []

    for (const menu of ["1", "2"]) {
      console.log(menu)
      var m = this.getMenu(menu)

      if (m !== null) {
        menus.push(m)
      }
    }
    return menus
  }
}


export default new MenuService();
