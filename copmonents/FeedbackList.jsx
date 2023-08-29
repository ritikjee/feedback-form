import React from 'react'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from './context/FeedbackContext'
import Spinner from './helper/Spinner'
function FeedbackList() {

  const {feedback,isLoading}= useContext(FeedbackContext)
    // console.log(feedback)
    if(!isLoading&&(!feedback||feedback.length===0)){
      return <p>No feedback yet</p>
    }

    return isLoading?<Spinner/>:(
    
    <div className='feedback-list'>
      {feedback.map((item)=>(
        <div><FeedbackItem key={item.id} item={item} 
        /></div>
      ))}
    </div>
  )
  
}

export default FeedbackList
