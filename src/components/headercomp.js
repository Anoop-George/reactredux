import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import rootactions from '../actions/rootactions';

export default function Headercomp() {
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state=>state.loginuserdata.loggedinUser)
    const handlesubmit=()=>{dispatch(rootactions.loginuser(name))}

    return (
        <div>
           
            <h4>This is the header component</h4>
            <input type='text' placeholder='loginid' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handlesubmit}>submit</button>
        
        
        <h4>{user}</h4>
        </div>
    )   
}
