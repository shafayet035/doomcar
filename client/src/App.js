import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import useFirebaseContext from "./hooks/useFirebaseContext";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Purchase from "./pages/Purchase";

function App() {
  const { loading } = useFirebaseContext();

  return (
    <>
      {loading ? (
        <span></span>
      ) : (
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/explore" exact>
              <Explore />
            </Route>
            <PrivateRoute path="/purchase" exact>
              <Purchase />
            </PrivateRoute>
            <Route path="/auth" exact>
              <Auth />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">"Not Found"</Route>
          </Switch>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
