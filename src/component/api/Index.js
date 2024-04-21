import React from "react";
import Sidebar from "../header&sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Dashbord from "../pages/dashbord/Dashbord";
import Productlist from "../pages/Product/Productlist";
import Sellerlist from "../pages/Seller/Seller";
import Addseller from "../pages/Seller/Addseller";
import Editseller from "../pages/Seller/EditSeller";
import EditProduct from "../pages/Product/EditProduct";
import AddProduct from "../pages/Product/AddProduct";
import MonthlyProductDetails from "../pages/Product/MonthlyProductDetails";
import Profile from "../pages/profile/Profile";
import BillGenerate from "../pages/Bill/BillGenerate";
import InvoiceRecord from "../pages/Bill/InvoiceRecord";
import PaymentEntry from "../pages/PaymentReport/PaymentEntry";
const App = () => {
  return <>
    <div className="setdisplay">
      <Sidebar />
      <Switch>
        <Route path="/app/home">
          <Dashbord />
        </Route>
        <Route path="/app/product">
          <Productlist />
        </Route>
        <Route path="/app/product_repot">
          <MonthlyProductDetails />
        </Route>
        <Route path="/app/productadd">
          <AddProduct />
        </Route>
        <Route path="/app/productedit/:id">
          <EditProduct />
        </Route>
        <Route path="/app/seller">
          <Sellerlist />
        </Route>
        <Route path="/app/selleradd">
          <Addseller />
        </Route>
        <Route path="/app/selleredit/:id">
          <Editseller />
        </Route>
        <Route path="/app/profile">
          <Profile />
        </Route>
        <Route path="/app/createbill">
          <BillGenerate />
        </Route>
        <Route path="/app/invoicerecord">
          <InvoiceRecord />
        </Route>
        <Route path="/app/paymentaccept">
          <PaymentEntry />
        </Route>
      </Switch>
    </div>
  </>;
};

export default App;
