import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import ProductDetails from "./ProductDetails"
import ProductDetailInfo from "./ProductDetailInfo"
import ProductDetailNutrition from "./ProductDetailNutrition"
import ProductDetailStorage from "./ProductDetailStorage"
import Cart from "./Cart"
import MeatSeafoodAvail from "./MeatSeafoodAvail"
import WebHome from "./WebHome"
import WebHomeAbout from "./WebHomeAbout"
import WebHomeNavbar from "./WebHomeNavBar"
import WebHomeContact from "./WebHomeContact"
import WebHomeApp from "./WebHomeApp"

function App() {
  const [cart, setCart] = useState(() => {
    let savedCart = []
    try {
      savedCart = JSON.parse(localStorage.getItem("cart")) || []
    } catch (error) {
      savedCart = []
    }
    return savedCart
  })

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart])

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id)
    setCart(updatedCart)
  }

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find((product) => product.id === newProduct.id)
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })
      setCart(updatedCart)
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ])
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<AppLayoutM />}>
            <Route path="" element={<WebHome />}></Route>
            <Route path="webhomeabout" element={<WebHomeAbout />}></Route>
            <Route path="webhomeapp" element={<WebHomeApp />}></Route>
            <Route path="contact" element={<WebHomeContact />}></Route>
          </Route>
          <Route path="/app" element={<AppLayout cart={cart} />}>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route
              path="products"
              element={
                <Products
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                />
              }
            ></Route>
            <Route
              path="products/:id/"
              element={<ProductDetails onProductAdd={handleProductAdd} />}
            >
              <Route
                path=""
                element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
              ></Route>

              <Route
                path="nutrition"
                element={<ProductDetailNutrition />}
              ></Route>

              <Route path="storage" element={<ProductDetailStorage />}></Route>
            </Route>
            <Route
              path="meatseafoodavail"
              element={<MeatSeafoodAvail />}
            ></Route>
            <Route path="cart" element={<Cart cart={cart} />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function AppLayout({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

function AppLayoutM() {
  return (
    <>
      <WebHomeNavbar />
      <div className="profile-page">
        <Outlet />
      </div>
    </>
  )
}

export default App
