import Test from "./components/Test";
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
    ],
  },
];

export default routes;
