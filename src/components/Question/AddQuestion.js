import React, { Component } from 'react';
import './Question.css';
import {Link} from 'react-router-dom';

class AddQuestion extends Component {
    state = {
        subject_name : ""
      
        };
        change  = e => {
          this.setState ({
            [e.target.name]: e.target.value
          });
        };
        onSubmit = e =>
        {
            e.preventDefault();
            console.log(this.state);
            this.setState ({
             subject_name : ""
  
            })
        };
    render() {
      return (
          <body className="skin-blue fixed-layout">
          <div className="page-wrapper">
  
               <div className="container-fluid">
                 
                 <div className="row page-titles">
                     <div className="col-md-5 align-self-center">
                         {/* <h4 className="text-themecolor">Forms</h4> */}
                         <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">Add Question</li>
                              </ol>
                              </nav>
                     </div>
                    
                 </div>
  
  
              </div>
  
      {/*Form content begin */}
     
  <div className = "product-form-upper">
      <div className = "container">
      <div className = "below-custom-form">
          <div className = "row">
             <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                     <h3>Add New Question</h3>
             </div>
          </div>
          <form className="custom-content-form-user">
    <div class="form-row">
      <div class="form-group col-md-12">
      <label for="inputCategory">Enter Question</label>
       <input type="text" className="form-control" placeholder="Enter Question" name="question" value = {this.state.question} onChange = {e => this.change(e)} />
      </div>
      <div class="form-group col-md-6">
       <input type="text" className="form-control" placeholder="Option 1" name="option1" value = {this.state.option1} onChange = {e => this.change(e)} />
      </div>
      <div class="form-group col-md-6">
       <input type="text" className="form-control" placeholder="Option 2" name="option2" value = {this.state.option2} onChange = {e => this.change(e)} />
      </div>
      <div class="form-group col-md-6">
       <input type="text" className="form-control" placeholder="Option 3" name="option3" value = {this.state.option3} onChange = {e => this.change(e)} />
      </div>
      <div class="form-group col-md-6">
       <input type="text" className="form-control" placeholder="Option 4" name="option4" value = {this.state.option4} onChange = {e => this.change(e)} />
      </div>
      <br />
      <div class="form-group col-md-12">
      <label for="inputCategory">Enter Answer</label>
       <input type="text" className="form-control" placeholder="Enter Answer" name="answer" value = {this.state.answer} onChange = {e => this.change(e)} />
      </div>
    </div>
   
    <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
  </form>
      </div>
      </div>
  </div>
  
  
  
  
  
  
          </div>
          </body>
  
      )
    }
  }
 

export default AddQuestion;