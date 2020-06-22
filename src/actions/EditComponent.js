import React from 'react'
import {connect} from 'react-redux'

class EditComponent extends React.Component
{
    handleEdit=(e)=>{
        e.preventDefault();
        const newTitle=this.getTitle.value;
        const newMessage=this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({type: 'UPDATE',id:this.props.post.id,data:data})
    }
    render()
    {
        return(
            <div>
                <form  className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input)=>this.getTitle = input}
                    defaultValue={this.props.post.title} placeholder="Enter the Title"
                    /><br/><br/>
                    <textarea required rows="5" ref={(input)=>this.getMessage = input}
                    defaultValue={this.props.post.message} cols="28" placeholder="Enter the Message"
                    /><br/><br/>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}
export default connect() (EditComponent)