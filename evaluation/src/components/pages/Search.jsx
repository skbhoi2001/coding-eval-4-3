import { Button, Input } from "@material-ui/core"
import { useState } from "react"
const Search = ()=>{
    const [username,setUserName] = useState()
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
            
            <div style={{marginTop:"100px"}}>
                <Input type="text" onChange={e => setUserName(e.target.value)} />
                <Button onClick={handleSubmit}>Search</Button>
                {/* <button onClick={handleSubmit}>Search</button> */}
            </div>
        </div>
    )  
}

export default Search