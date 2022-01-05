import { useState } from "react"
import { useDispatch } from "react-redux"
import { logoutSuccess } from "../../redux/login/action"

const Search = ()=>{
    const [username,setUserName] = useState()

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logoutSuccess())
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!username){
            alert('Please enter name')
            return
        }
        return alert(`${username}`)

        
    }
    return(
        <div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div>
                <input type="text" onChange={e => setUserName(e.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )

    
}

export default Search