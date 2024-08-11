import ExampleComponent from "../Components/ExampleComponent";
export const TABS = [
  {
    title: "Product",
    Component: ExampleComponent,
    path: "/product",
  },
  {
    title: "Pricing",
    Component: ExampleComponent,
    path: "/pricing",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
