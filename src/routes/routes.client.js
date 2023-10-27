import { ClientLayout, BasicLayout } from "../layouts";
import {
  SelectTable,
  Categories,
  Menu,
  Products,
  Cart,
  OrdersHistory,
} from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: BasicLayout,
    component: SelectTable,
    exact: true,
  },
  {
    path: "/client/:tableNumber",
    layout: ClientLayout,
    component: Categories,
    exact: true,
  },
  {
    path: "/client/:tableNumber/Menu",
    
  },
  {
    path: "/client/:tableNumber/Footer",
    
  },
  {
    path: "/client/:tableNumber/Carousel",
    
  },
  {
    path: "/client/:tableNumber/cart",
    layout: ClientLayout,
    component: Cart,
    exact: true,
  },
  {
    path: "/client/:tableNumber/orders",
    layout: ClientLayout,
    component: OrdersHistory,
    exact: true,
  },
  {
    path: "/client/:tableNumber/:idCategory",
    layout: ClientLayout,
    component: Products,
    exact: true,
  },
  
];

export default routesClient;
