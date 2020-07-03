import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Home} />
          <Route path="/admin" component={Dashboard} />
        </div>
      </div>
    );
  }
}

export default App;
