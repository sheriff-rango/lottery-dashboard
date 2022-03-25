import Blocks from "../Blocks";

interface routeItem {
  title: string;
  url: string;
  component: any;
}

const Routes: routeItem[] = [
  {
    title: "Blocks",
    url: "/blocks",
    component: Blocks,
  },
  {
    title: "Results",
    url: "/results",
    component: Blocks,
  },
  {
    title: "Balances",
    url: "/balances",
    component: Blocks,
  },
];

export default Routes;
