const { Link } = require("react-router-dom")

const Navbar = ()=>{
    return(
        <div>
            <div>
                <Link to="/">Dashboard</Link>
            </div>
            {/* <div>
                <Link to="/login">Login</Link>
            </div> */}
            <div>
                <Link to="/search">Search</Link>
            </div>
        </div>
    )
}

export default Navbar