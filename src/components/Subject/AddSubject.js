import React, { Component } from 'react';
import './Subject.css';
import {Link} from 'react-router-dom';

class AddSubject extends Component {
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
                                 <li className="breadcrumb-item active" aria-current="page">Add Subject</li>
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
                    <h3>Add New Subject</h3>
            </div>
         </div>
         <form className="custom-content-form-user">
   <div class="form-row">
     <div class="form-group col-md-12">
     <label for="inputCategory">Enter User Email</label>
      <input type="text" className="form-control" placeholder="English" name="subject_name" value = {this.state.subject_name} onChange = {e => this.change(e)} />
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

export default AddSubject;