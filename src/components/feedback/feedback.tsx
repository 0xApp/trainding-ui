import React from "react";
import './feedback.css';

const FeedBack = () =>{
    return(
        <div className="feedback">
            <h4>Congratulation , you have finished the “Basics of 3D Design” course</h4>
            <p>Please help us improve our trainings by providing feedback </p>
            <textarea className="form-control textarea" name="" id="" rows={10}>
            </textarea>
        </div>
    )

}

export default FeedBack;