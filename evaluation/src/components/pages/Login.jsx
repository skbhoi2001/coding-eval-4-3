import { useDispatch } from "react-redux"
import { loginSuccess } from "../../redux/login/action"

const Login = ()=>{

    const dispatch = useDispatch()

    const loginUser =()=>{
        dispatch(loginSuccess())
    }

    return(
        <div>
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default Login