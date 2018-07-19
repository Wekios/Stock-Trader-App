import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import PortfolioDetail from "./components/portfolio/PortfolioDetail.vue";
import Stocks from "./components/stocks/Stocks.vue";
import StocksDetail from "./components/stocks/StocksDetail.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/portfolio",
    component: Portfolio,
    children: [
        { path: "", component: PortfolioDetail }]
  },
  { path: "/stocks",
    component: Stocks,
    children: [
        { path: "", component: StocksDetail }]
  }
];