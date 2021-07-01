import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductDetail from "./Components/Product/ProductDetail";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Product} />
          {/* <Route path="*">!404 Page not Found</Route> */}
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/productdetail" component={ProductDetail}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
