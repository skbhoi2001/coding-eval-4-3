import { logoutSuccess } from "../../redux/login/action"
import { useDispatch } from "react-redux"
import { Button } from "@material-ui/core"
const Dashboard = ()=>{
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logoutSuccess())
    }
    return(
        <div>
            <div style={{marginTop:"100px"}}>
                <Button onClick={handleLogout}>Logout</Button>
                
            </div>
        </div>
    )
}

export default Dashboard