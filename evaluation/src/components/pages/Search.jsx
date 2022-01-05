import { useDispatch } from "react-redux"
import { logoutSuccess } from "../../redux/login/action"

const Search = ()=>{

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logoutSuccess())
    }

    return(
        <div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <h2>Search</h2>
        </div>
    )
}

export default Search