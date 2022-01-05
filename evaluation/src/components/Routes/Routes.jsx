import Search from "../pages/Search"

const { Route } = require("react-router-dom")
const { default: Dashboard } = require("../pages/Dashboard")
const { default: Login } = require("../pages/Login")

const Routes = ()=>{
    return(
        <div>
            <Route exact path="/">
                <Dashboard/>
            </Route>
            {/* <Route exact path="/login">
                <Login/>
            </Route> */}
            <Route exact path="/search">
                <Search/>
            </Route>
        </div>
    )
}

export default Routes