import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { loginSuccess } from "../../redux/login/action"

const Login = ()=>{

    const dispatch = useDispatch()

    const loginUser =()=>{
        dispatch(loginSuccess())
    }

    return(
        <div style={{width:"100px", margin:"auto"}}>
            {/* <button >Login</button> */}
            <Button onClick={loginUser}>Login</Button>
        </div>
    )
}

export default Login