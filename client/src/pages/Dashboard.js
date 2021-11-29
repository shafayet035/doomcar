import DashboardNav from "../components/DashboardNav";
import { useRouteMatch } from "react-router-dom";
import AddProduct from "../Dashboard/AddProduct";
import Orders from "../Dashboard/Orders";
import MakeAdmin from "../Dashboard/MakeAdmin";
import ManageOrders from "../Dashboard/ManageOrders";
import Review from "../Dashboard/Review";
import PrivateRoute from "../components/PrivateRoute";
import Pay from "../pages/Pay";
import AdminRoute from "../components/AdminRoute";
import ManageProducts from "../Dashboard/ManageProducts";

const Dashboard = () => {
  const { url } = useRouteMatch();

  return (
    <div className="py-3 container">
      <DashboardNav />

      <div className="my-5">
        <PrivateRoute path={`${url}/pay`}>
          <Pay />
        </PrivateRoute>
        <PrivateRoute path={`${url}/my-orders`}>
          <Orders />
        </PrivateRoute>
        <AdminRoute path={`${url}/add-product`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${url}/make-admin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${url}/manage-orders`}>
          <ManageOrders />
        </AdminRoute>
        <AdminRoute path={`${url}/manage-products`}>
          <ManageProducts />
        </AdminRoute>
        <PrivateRoute path={`${url}/reviews`}>
          <Review />
        </PrivateRoute>
      </div>
    </div>
  );
};

export default Dashboard;
