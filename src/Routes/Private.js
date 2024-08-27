import { useState, useEffect } from "react"; 
import { Auth } from "../service/conectdb";
import { onAuthStateChanged } from "firebase/auth"; 
import { Navigate } from "react-router-dom";

 export default function Private({children}) {

    const [loanding, setLoanding] = useState(true);
    const [userLog, setUserLog] = useState(false);

    useEffect(()=>{
        async function CheckLoad(){
            onAuthStateChanged(Auth,(user)=>{
                // Checa se tem usuario logado e armazena o Id e email 
                if(user){
                     const userDetalhe ={
                        id: user.uid,
                        email: user.email
                }

                localStorage.setItem("@detalheUser", JSON.stringify(userDetalhe))

                setLoanding(false)
                setUserLog(true)

                }else{
                    setLoanding(false)
                    setUserLog(false)
                }

            })
        }

        CheckLoad();
    },[])

    if(loanding){
        return <></>
    }
    
    if(!userLog){
        return <Navigate to={"/"}/>
    }
 return children;
}

