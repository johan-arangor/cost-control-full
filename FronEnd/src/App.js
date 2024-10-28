import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Login from './features/login/index';
import Signup from './features/signup/index';
import Principal from './features/principal/index';
import RenewPassword from './features/login/indexRenewPassword';
// import ConfirmAccount from './features/signup/indexConfirmAccount';
// import ChangePassword from './features/login/indexChangePassword';
// import Settings from './features/settings/index';
// import EntitysPrincipal from './features/entitys/index';
// import CategoriesPrincipal from './features/categories/index';
// import SubCategoriesPrincipal from './features/subcategories/index';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/renewPassword" element={<RenewPassword />} />
            <Route exact path="/principal" element={<Principal />} />
            {/* <Route exact path="/confirmAccount/:token" element={<ConfirmAccount />} />
            <Route exact path="/changePassword/:token" element={<ChangePassword />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/entitys" element={<EntitysPrincipal />} />
            <Route exact path="/categories" element={<CategoriesPrincipal />} />
            <Route exact path="/subCategories/:id" element={<SubCategoriesPrincipal />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;