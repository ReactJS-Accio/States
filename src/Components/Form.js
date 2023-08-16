import {useState} from "react";


const Form = ()=> {
  
  
  const [user,setUser] = useState({name:"",email:"",password:"",confirmPass:""});
  const [err,setErr] = useState("");
  const [success,setSuccess] = useState("");
  
  const {name,email,password,confirmPass} = user;
  
  
  function submitForm(e){
    
    e.preventDefault();
    
    if(!name || !email || !password || !confirmPass){
      setErr("All Fields required")
      return
    }

    if(name.trim().includes(" ") == false ){
        setErr("Name should contain two words")
        return
    }

    if(email.includes("@") == false){
        setErr("Enter Valid Email Address")
        return
    }

    if(password.length <8){
        setErr('Password must be at least 8 characters long');
        return;
    }
    if(password != confirmPass){
        setErr("Passwords do not match");
        return
    }

    setSuccess("Form Submitted Successfully");
    setUser({name:"",email:"",password:"",confirmPass:""});
    setErr("");


  }
  
  
  return (
    <div className="form">
    
    {
      err && <h4 style={{color:"crimson"}}>{err}</h4>
    }

    {
        success && <h4 style={{color:"blueviolet"}}>{success}</h4>
    }
    
    <form onSubmit={submitForm}>
    
    <input type ="text" placeholder="Name"
    onChange={(e)=> setUser({...user, name:e.target.value})}
    value={user.name}
    />
    <br/>
    <br/>
    <input type ="email" placeholder="Email"
    onChange={(e)=> setUser({...user, email:e.target.value})}
    value={user.email}
    />
    <br/>
    <br/>
    <input type="password" placeholder="Password"
    onChange={(e)=> setUser({...user, password:e.target.value})}
    value={user.password}
    />
    <br/>
    <br/>
    <input type="password" placeholder="Confirm Password"
    onChange={(e)=> setUser({...user, confirmPass:e.target.value})}
    value={user.confirmPass}
    />
    <br/>
    <br/>
    <button type="submit"> Submit </button>
    
    
    </form>
    
    </div>
    )
}


export default Form;
