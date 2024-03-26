import Test from "./components/Test";
import UlapDistribution from "./components/UlapDistribution";
import OrganizationalChart from "./components/OrganizationalChart";
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
        path: "UlapDistribution",
        element: UlapDistribution,
      },
      {
        path: "OrganizationalChart",
        element: OrganizationalChart,
      },
    ],
  },
];

export default routes;
