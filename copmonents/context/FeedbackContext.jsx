import { createContext,useState, useEffect } from "react";

const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
    const [feedbackEdit,setFeedbackEdit]=useState({
        text:{},
        edit:false
      })
    const[isLoading,setIsLoading]=useState(true)
    const[feedback,setFeedback]=useState([])
      useEffect(()=>{
        fetchData()
      },[])
    const fetchData=async ()=>{
      const response=await fetch('http://localhost:5000/feedback?sort=id&order=desc')
      const data= await response.json()

      setFeedback(data)
      setIsLoading(false);
    }
  const deleteFeedback=async (id)=>{
    if(window.confirm("Are you sure you want to delete this content")){
      await fetch(`http://localhost:5000/feedback/${id}`,{
        method:'DELETE',
      })
      setFeedback(feedback.filter((item)=>item.id!=id))
    }
    
  }

 
  const editFeedback=(item)=>{
    setFeedbackEdit({
        item:item,
        edit:true
    })
  }

  const addFeedback= async (newFeedback)=>{
    // newFeedback.id=uuid();
    const response= await fetch('http://localhost:5000/feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      }, 
    body:JSON.stringify(newFeedback)
    })
    const data = await response.json()
    setFeedback([data,...feedback])
  }

  const updateFeedback= async (id,upditem)=>{
    const response = await fetch(`http://localhost:5000/feedback/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(upditem)
    })

    const data = await response.json()
    setFeedback(feedback.map((item)=>(item.id===id?{...item,...data}:item)))
  }
    return <FeedbackContext.Provider
    value={{
        feedback:feedback,
        feedbackEdit,
        setIsLoading,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext