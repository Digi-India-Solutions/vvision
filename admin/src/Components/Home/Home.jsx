import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllCategory from '../../Pages/Category/AllCategory'
import AddCategory from '../../Pages/Category/AddCategory'
import EditCategory from '../../Pages/Category/EditCategory'
import AllProduct from '../../Pages/Products/AllProduct'
import AddProduct from '../../Pages/Products/AddProduct'
import EditProduct from '../../Pages/Products/EditProduct'
import AllBanner from '../../Pages/Banners/AllBanner'
import AddBanner from '../../Pages/Banners/AddBanner'
import EditBanner from '../../Pages/Banners/EditBanner'
import AllShopBanner from '../../Pages/ShopBanner/AllShopBanner'
import AddShopBanner from '../../Pages/ShopBanner/AddShopBanner'
import EditShopBanner from '../../Pages/ShopBanner/EditShopBanner'
import AllTags from '../../Pages/Tags/AllTags'
import AddTag from '../../Pages/Tags/AddTag'
import EditTag from '../../Pages/Tags/EditTag'
import AllVoucher from '../../Pages/Vouchers/AllVoucher'
import CreateVoucher from '../../Pages/Vouchers/AddVoucher'
import AllOrder from '../../Pages/Orders/AllOrder'
import EditOrder from '../../Pages/Orders/EditOrder'
import AllUsers from '../../Pages/Users/AllUsers'
import Login from '../auth/Login'

const Home = () => {
  const login = sessionStorage.getItem("login")

  return (
    <>
      {login ? (
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Category */}
              <Route path="/all-category" element={<AllCategory />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/edit-category/:_id" element={<EditCategory />} />

              {/* Product */}
              <Route path="/all-products" element={<AllProduct />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:_id" element={<EditProduct />} />

              {/* Users */}
              <Route path="/all-users" element={<AllUsers />} />

              {/* Vouchers */}
              <Route path="/all-voucher" element={<AllVoucher />} />
              <Route path="/add-voucher" element={<CreateVoucher />} />

              {/* Tags */}
              <Route path="/all-tags" element={<AllTags />} />
              <Route path="/add-tag" element={<AddTag />} />
              <Route path="/edit-tag/:_id" element={<EditTag />} />

              {/* Banners */}
              <Route path="/all-banners" element={<AllBanner />} />
              <Route path="/add-banner" element={<AddBanner />} />
              <Route path="/edit-banner/:_id" element={<EditBanner />} />

              {/* Shop Banners */}
              <Route path="/all-shop-banners" element={<AllShopBanner />} />
              <Route path="/add-shop-banner" element={<AddShopBanner />} />
              <Route path="/edit-shop-banner/:_id" element={<EditShopBanner />} />

              {/* Orders */}
              <Route path="/all-orders" element={<AllOrder />} />
              <Route path="/edit-order/:_id" element={<EditOrder />} />

              {/* Redirect to dashboard if route is not found */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Redirect to login if user is not logged in */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  )
}

export default Home
