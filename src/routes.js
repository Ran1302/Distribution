import Test from "./components/Test";
import UlapTax from "./components/UlapTax";
import DefaultLayout from "./layouts/DefaultLayout";

const routes = [
  {
    path: "/",
    element: DefaultLayout,
    children: [
      {
        path: "test",
        element: Test,
      },
      {
        path: "ulaptax",
        element: UlapTax,
      }
    ],
  },
];

export default routes;
