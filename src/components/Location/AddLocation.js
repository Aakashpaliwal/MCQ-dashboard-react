import React, { Component } from 'react'
import './Locations.css';
import {Link} from 'react-router-dom';
export class AddLocation extends Component {
    state = {
        zone : "",
        location : "",
        contact_person : "",
        contact_number : "",
        email : "",
        address:""
    
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
            zone : "",
            location : "",
            contact_person : "",
            contact_number : "",
            email : "",
            address:""
        
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
                                <li className="breadcrumb-item active" aria-current="page">Location Form</li>
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
                   <h3>Add Location</h3>
           </div>
        </div>
        <form className="custom-content-form">
  <div class="form-row">
  <input type="hidden" className="form-control" name="cid" />
  <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Zone</label>
     <input type="text" className = "form-control" placeholder="Madhya Pradesh" name="zone" value={this.state.zone} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Location</label>
     <input type="text" className = "form-control" placeholder="Indore" name="location" value={this.state.location} onChange = {e => this.change(e)} />
    </div>
   
    
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Name</label>
     <input type="text" className="form-control" placeholder="John Doe" name="contact_person" value = {this.state.contact_person} onChange = {e => this.change(e)} />
    </div>

         <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Number</label>
   <input type="number" placeholder="12345678" className = "form-control" name = "contact_number" value={this.state.contact_number} onChange = {e => this.change(e)} />
    </div>


    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Email</label>
     <input type="email" className = "form-control" placeholder="johndoe@gmail.com" name="email" value={this.state.email} onChange = {e => this.change(e)} />
    </div>
  
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Address</label>
        <textarea className="form-control" placeholder="address" name="address" value={this.state.address} onChange = {e => this.change(e)}></textarea>
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

export default AddLocation
