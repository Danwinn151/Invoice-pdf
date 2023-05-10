import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ExpenseDocument } from "../components/generateInvoice/invoiceDocument";

import React from "react";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>   
 
       {/* EXPENSES ROUTES  */}
          <Route path="expenses">
            <Route path="" element={<ExpenseDocument/>} />

          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;