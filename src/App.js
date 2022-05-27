import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import Nav from "./components/Navbar";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route exact path="products/:id" element={<SingleProduct />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////////////
//import Testing from "./Testing";

// function App() {
//   return (
//     <div>
//       <h4>comfy cloth starter</h4>
//       <Testing />
//       { <Button>click me</Button>
//       <Container>
//         <h3>Hello world</h3>
//         <div className="hero">hero text</div>
//       </Container>
//       <Container2>
//         <h3>Hello world</h3>
//         <div className="hero">hero text</div>
//       </Container2> }
//     </div>
//   );
// }

// const Button = styled.button`
//   background: green;
//   color: white;
// `;

// const Container = styled.div`
//   background: red;
//   color: white;
//   font-size: 2rem;

//   .hero {
//     font-size: 8rem;
//   }
// `;

// const Container2 = styled.div`
//   background: red;
//   color: white;
//   font-size: 2rem;

//   .hero {
//     font-size: 1rem;
//   }
// `;
