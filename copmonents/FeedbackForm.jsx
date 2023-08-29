import Card from "./helper/Card"
import { useContext, useEffect, useState } from "react"
import Button from '../copmonents/helper/Button';
import RatingSelector from "./RatingSelector";
import FeedbackContext from "./context/FeedbackContext";
function FeedbackForm() {
  
    const [text,setText]=useState('');
    const[disabled,setDisabled]= useState(true);
    const[msg,setMsg]=useState('')
    const[rating,selectedRating]=useState(10);
    const {addFeedback,feedbackEdit,updateFeedback}= useContext(FeedbackContext);

    useEffect(()=>{
      if(feedbackEdit.edit===true){
        setDisabled(false)
        setText(feedbackEdit.item.text)
        selectedRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])
    const handleOnChange=(e)=>{
        if(text===''){
            setDisabled(true);
            setMsg(null)
        }
        else if(text!==''&&text.trim().length<=10){
            setDisabled(true);
            setMsg('Comment should be greater than 10 character')
        }
        else{
            setDisabled(false)
            setMsg(null)
        }
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(text.trim().length>10){
        const newFeedback = { 
          text,
          rating
        }

        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id,newFeedback)
        }
        else{
          addFeedback(newFeedback);
        }
        
        setText('')
      }
    }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our services with us?</h2>
        <RatingSelector select={(rating)=>{
          selectedRating(rating)
        }}/>
        <div className="input-group">
            <input onChange={handleOnChange} type="text"  placeholder="Write a review" value={text}/>
            <Button type="submit" version='secondary'isDisabled={disabled}>Submit</Button>
        </div>
        {msg&& <div className="message">{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
