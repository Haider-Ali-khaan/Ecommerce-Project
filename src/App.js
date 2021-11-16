import { React, useState, useEffect, Suspense, lazy } from "react";
import { Alert } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Progress from "./Component/Progress";
const Header = lazy(() => import("./Component/Header"));
const Home = lazy(() => import("./Component/Home"));
const Cart = lazy(() => import("./Component/Cart"));
const ItemDetail = lazy(() => import("./Component/ItemDetail"));
const Shop = lazy(() => import("./Component/Shop"));
const Register = lazy(() => import("./Component/Register"));
const Login = lazy(() => import("./Component/Login"));
const Footer = lazy(() => import("./Component/Footer"));
const PageNotFound = lazy(() => import("./Component/PageNotFound"));
const SrchPage = lazy(() => import("./Component/SrchPage"));
const Practice = lazy(()=> import("./Component/Practice"));
function App() {
  // getting saved data from storage for cart
  let i;
  if (localStorage.getItem("items") === null) {
    i = [];
  } else {
    i = JSON.parse(localStorage.getItem("items"));
  }
  // products who's showing on home
  const [items2] = useState([
    {
      sno: 1,
      qty: 1,
      name: "Niker",
      price: 13,
      totalPrice: 13,
      img: "assets/images/products/fashion_03.jpg",
      title: "T-Shirt Raw Hem Organic Boro Constrast Denim",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
      desc: `<ul>
      <li>7,9-inch LED-backlit, 130Gb</li>
      <li>Dual-core A7 with quad-core graphics</li>
      <li>FaceTime HD Camera 7.0 MP Photos</li>
    </ul>`,
      new: true,
    },
    {
      sno: 2,
      qty: 1,
      name: "T-Shirt",
      price: 11,
      totalPrice: 11,
      img: "assets/images/products/fashion_07.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
    },
    {
      sno: 3,
      qty: 1,
      name: "Bag",
      price: 15,
      totalPrice: 15,
      img: "assets/images/products/fashion_08.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
      sale: true,
    },
    {
      sno: 4,
      qty: 1,
      name: "Shirt",
      price: 131,
      totalPrice: 131,
      img: "assets/images/products/fashion_09.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
    },
    {
      sno: 5,
      qty: 1,
      name: "Bag",
      price: 31,
      totalPrice: 31,
      img: "assets/images/products/fashion_02.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
    },
    {
      sno: 6,
      qty: 1,
      name: "Shoe",
      price: 31,
      totalPrice: 31,
      img: "assets/images/products/fashion_05.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
      Bestseller: true,
    },
    {
      sno: 7,
      qty: 1,
      name: "Bag",
      price: 31,
      totalPrice: 31,
      img: "assets/images/products/fashion_08.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
      new: true,
      Bestseller: true,
    },
    {
      sno: 8,
      qty: 1,
      name: "watch",
      price: 131,
      totalPrice: 131,
      img: "assets/images/products/fashion_04.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
    },
    {
      sno: 9,
      qty: 1,
      name: "watch",
      price: 19,
      totalPrice: 19,
      img: "assets/images/products/fashion_01.jpg",
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi dolorum sequi.",
      sale: true,
      Bestseller: true,
    },
  ]);

  // Owl Carousel options
  const options={
		responsiveClass:true,
		 items:5,
		  stagePadding:0,
		   mergeFit:true,
		    loop:true,
			 margin:10,
			 autoplay:true,
			  autoplayTimeout:2000,
			   autoplayHoverPause:true,
	responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
}
  // alerts
  const [showalrt, setShowalrt] = useState(false);
  const [login, setlogin] = useState(false);
  useEffect(() => {
    sessionStorage.setItem("login", JSON.stringify(login));
  }, [login]);
  // logout
  const logout = () => {
    setlogin(false);
    setAlert("logout");
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  // show alert when item addedd, remove, login and logout
  const [alert, setAlert] = useState("");
  const [logdlrt, setLogdlrt] = useState(false);
  const [alertForLogin, setalertForLogin] = useState(false);

  let ckalrt = (
    <Alert className="alrta" variant="danger">
      product already in cart
    </Alert>
  );
  let alrtAdded = (
    <Alert className="alrta" variant="success">
      Product has been added into cart
    </Alert>
  );
  let alrtRemoved = (
    <Alert className="alrta" variant="danger">
      Product romoved from cart
    </Alert>
  );
  let alrtLogIn = (
    <Alert className="alrta" variant="success">
      You are Loged In
    </Alert>
  );
  let alrtLogout = (
    <Alert className="alrta" variant="danger">
      You are Loged Out
    </Alert>
  );
  let alrtCreatedAccount = (
    <Alert className="alrta" variant="success">
      Successfully created your account! You can now Log In
    </Alert>
  );
  let showAlertForLogin = (
    <Alert className="alrta" variant="danger">
      please Log In for this feature
    </Alert>
  );
  // functionality for remove item from cart
  const removeCart = (item) => {
    setCart(cart.filter((e) => e !== item));
    setAlert(false);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  const clearCart = () => {
    setCart([]);
    setAlert(false);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  // show alert for login
  let showAlertForLoginf = () => {
    console.log("alrt");
    setalertForLogin(true);
    setTimeout(() => {
      setalertForLogin(false);
    }, 3000);
  };
  // functionality for add item in cart
  const [chkAlert, setchkAlert] = useState(false);
  let AddtoCart = (item) => {
    if (login === true) {
      let chkngCrt = [...cart];
      let chk = chkngCrt.find((e) => item.sno === e.sno);
      if (chk) {
        setchkAlert(true);
        setTimeout(() => {
          setchkAlert(false);
        }, 5000);
      } else {
        setCart([...cart, { ...item }]);
        setAlert(true);
        setTimeout(() => {
          setAlert("");
        }, 5000);
      }
    } else {
      showAlertForLoginf();
    }
  };

  // serach
const [srchproduct, setsrchproduct] = useState([])

  // function for reduce qty and price of a item who's added in cart
  let reduce = (item) => {
    if (item.qty > 1) {
      let newcart = [...cart];
      let itemincart = newcart.find((product) => item.sno === product.sno);
      if (itemincart) {
        itemincart.qty--;
        itemincart.totalPrice -= itemincart.price;
      }
      // else {
      //   itemincart = { ...item, qty: item.qty - 1 };
      //   newcart.push(itemincart);
      // }
      setCart(newcart);
    }
  };
  // function for increment qty and price
  let increment = (item) => {
    let newcart = [...cart];
    let itemincart = newcart.find((product) => item.sno === product.sno);
    if (itemincart) {
      itemincart.qty++;
      let p = itemincart.price;
      itemincart.totalPrice += p;
    }
    // else {
    //   itemincart = { ...item, qty: item.qty + 1 };
    //   newcart.push(itemincart);
    // }
    setCart(newcart);
  };

  const [cart, setCart] = useState(i);
  // functionality for item set in local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cart));
  }, [cart]);

  //
  const [indx, setindx] = useState(1);
  const selectitem = (item) => {
    setindx(item.sno);
  };
  //
  const addToCart = () => {
    items2.map((item) => {
      if (item.sno === indx) {
        AddtoCart(item);
      }
      return "";
    });
  };
  return (
    <>
      <Router>
        <Suspense fallback={<Progress />}>
          <Header
            cart={cart}
            chkAlert={chkAlert}
            ckalrt={ckalrt}
            alert={alert}
            alrtAdded={alrtAdded}
            alrtRemoved={alrtRemoved}
            alrtLogIn={alrtLogIn}
            alrtLogout={alrtLogout}
            showalrt={showalrt}
            alrtCreatedAccount={alrtCreatedAccount}
            logdlrt={logdlrt}
            alertForLogin={alertForLogin}
            showAlertForLogin={showAlertForLogin}
            login={login}
            logout={logout}
            setsrchproduct={setsrchproduct}
            items2={items2}
            srchproduct={srchproduct}
            selectitem={selectitem}
            AddtoCart={AddtoCart}
          />
          <Switch>
            <Route exact path="/">
              <Home items2={items2} selectitem={selectitem} options={options} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                login={login}
                alert={alert}
                alrtRemoved={alrtRemoved}
                reduce={reduce}
                increment={increment}
                removeCart={removeCart}
                clearCart={clearCart}
                items2={items2}
                selectitem={selectitem}
                options={options}
              />
            </Route>

            <Route exact path="/ItemDetail">
              <ItemDetail
                items2={items2}
                addToCart={addToCart}
                selectitem={selectitem}
                indx={indx}
                options={options}
              />
            </Route>
            <Route exact path="/shop">
              <Shop
                items2={items2}
                AddtoCart={AddtoCart}
                login={login}
                setalertForLogin={setalertForLogin}
                selectitem={selectitem}
                showAlertForLogin={showAlertForLogin}
                showAlertForLoginf={showAlertForLoginf}
              />
            </Route>
            <Route exact path="/register">
              <Register setShowalrt={setShowalrt} />
            </Route>
            <Route exact path="/login">
              <Login
                setLogdlrt={setLogdlrt}
                login={login}
                setlogin={setlogin}
                setAlert={setAlert}
              />
            </Route>
            <Route exact path="/pageNotFound">
              <PageNotFound />
            </Route>
            <Route exact path="/search">
              <SrchPage srchproduct={srchproduct} items2={items2} />
            </Route>
            <Route exact path="/practice">
              <Practice items2={items2}/>
            </Route>
            <Redirect to="/pageNotFound" />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
