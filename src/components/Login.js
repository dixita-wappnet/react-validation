import React, {useState} from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors,setErrors] = useState({username:'',password:''})
    const submitForm = (event) => {

        event.preventDefault()
       
        let errorCount = 0
        if(username === '') {
            errorCount++
            setErrors((prevState)=>{

                return {...prevState,username:'Username is required'}
            })    
        }
        else {
            setErrors((prevState)=>{

                return {...prevState,username:''}
            })
        }
        
        if(password === '') {
            errorCount++
            setErrors((prevState)=>{
                return {...prevState,password:'Please, Enter Your Password'}    
        })}
        else if(password.length<8) {
            errorCount++
            setErrors((prevState)=>{
                return {...prevState,password:'Password is too short'}    
        })}
        else {
            setErrors((prevState)=>{

                return {...prevState,password:''}
            })
        }

        if(errorCount === 0 ) {
            const formdata = {username, password}
            console.log(formdata);
            setUsername("");
            setPasswordd("");
        }
    }
        
  return (
    <form onSubmit={submitForm}>
      Name :- <input type="text" name='username' placeholder='Enter Your Name'
      value={username} onChange={(e) =>setUsername(e.target.value)}/>
      {errors.username && <p>{errors.username}</p>}<br/><br/>
      Password :- <input type="password" name='password' placeholder='Enter Password'
      value={password} onChange={(e) => setPassword(e.target.value)}/>
       {errors.password && <p>{errors.password}</p>}<br/><br/>
      <input type="submit" />
    </form>
  )
}

    
