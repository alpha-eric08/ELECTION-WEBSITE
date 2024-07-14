import { useState } from "react"
import Signup from "../components/Signup"
import Signin from "../components/Signin"


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false)

  return (
    isSignUp ? <Signin setIsSignUp={setIsSignUp}/> : <Signup setIsSignUp={setIsSignUp}/>
  )
}

export default Auth