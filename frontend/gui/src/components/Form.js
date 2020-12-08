import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

class CustomForm extends React.Component{
  constructor(props) {
    super(props)
  
    this.state={
      title:"",
      content:""
    }
  }
  
  handleFormSubmit =(event)=>{
    console.log('kiarie')

      event.preventDefault()
      const title=event.target.elements.title.value
      const content=event.target.elements.content.value

      console.log(title,content)
      
  }

  render(){
  return (
  <div>
      {/* <form onSubmit={this.handleFormSubmit}>
              <label>title</label>
              <input type='text' name='title' onChange={this.onChangeHandler}/>
              <br></br>
              <label>content</label>
              <input type='text' name='content' onChange={this.onChangeHandler}/>
              <button type='submit'>Submit</button>
      </form> */}
      <Form onSubmitCapture={this.handleFormSubmit}>
        <Form.Item label="title">
        <Input name='title' placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="content">
        <Input name='content'placeholder="input placeholder" />
        </Form.Item>
        <Form.Item >
        <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
</div>
    
  )}
}
export default CustomForm
