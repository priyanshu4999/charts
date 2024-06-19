import { useState } from "react"



/*
export default function HomePage(){
    const [formsCount , setFormsCount] = useState(0)
    const [ forms , setAppendForm] = useState([])
    function Form(id){return (
        <div id={id}>
            <input type="text" placeholder="PID"></input>
            <input type="date" placeholder="date"></input>
            <button onClick={(id)=>{deleteForm(id)}}>-</button>
    
            
        </div>
        
    )}
    
    console.log(forms)

    function createForm(){
        setAppendForm(forms => [...forms,{id: "formsDiv"+setFormsCount(formsCount + 1) ,
            data:<Form id={"forms"+formsCount}/>} ])   
    }

    function deleteForm(id){
        for (let i = 0; i<forms.length ; i++){
            if (forms[i].id === id){
                setAppendForm(forms => forms.deleted(i))
            }
            console.log(forms)
        }
    }
    
    return(
        <div id="homePage">
            <button onClick={createForm}>+</button>
            <ul>
            {forms.map((item)=>{return (<li key={item.id} >{item.data}</li>)})}
            </ul>
        </div>
    )

}

*/