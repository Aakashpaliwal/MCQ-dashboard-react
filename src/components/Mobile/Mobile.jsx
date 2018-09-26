import React, { Component } from 'react';
import './Mobile.css';
import { Landline } from '../Landline/Landline';

export class Mobile extends Component {
    state = {
        mobilenumber: "",
        operator: "",
        amount: ""
      };
    
      change = e =>
      {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    
    onSubmit = e =>
    {
      e.preventDefault();
      console.log(this.state);
    }
    
      render() {
        return (
          <React.Fragment>
                      <body className="skin-blue fixed-layout">
                <div className="page-wrapper">
  
            <div className="container-fluid">

             <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h4 className="text-themecolor">Dashboard 1</h4>
                    </div>
                    <div className="col-md-7 align-self-center text-right">
                        <div className="d-flex justify-content-end align-items-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard 1</li>
                            </ol>
                            <button type="button" className="btn btn-info d-none d-lg-block m-l-15"><i className="fa fa-plus-circle"></i> Create New</button>
                        </div>
                    </div>
                </div>

    <div className = "custom-mobile">
    <div className = "container">
    <div className="custom-mobile-content">
    <div className = "row">
    <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h4 className="custom-header">Mobile Recharge</h4>
  <ul className="nav nav-pills" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" data-toggle="pill" href="#home">Pre Paid</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="pill" href="#menu1">Post Paid</a>
    </li>
  </ul>
<hr></hr>
 
  <div className="tab-content">
    <div id="home" className="container tab-pane active"><br />
    <div className = ""> 
       <div className="form-row">
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Mobile number" name="mobilenumber"
            value = {this.state.mobilenumber}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
           
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Operator" name="operator"
            value = {this.state.operator}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Amount" name="amount"
            value = {this.state.amount}
             onChange = {e => this.change(e)}/>
         </div>
         <button className="btn btn-success" onClick={e => this.onSubmit(e)}>Procced</button>
         </div>
    </div>
    </div>
    <div id="menu1" className="container tab-pane fade"><br />
    <div className = ""> 
       <div className="form-row">
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Mobile number" name="mobilenumber"
            value = {this.state.mobilenumber}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Operator" name="operator"
            value = {this.state.operator}
             onChange = {e => this.change(e)}/>
         </div>
         <div className="form-group col-md-12">
          
           <input type="text" className="form-control custom-mobile-number-field" placeholder="Enter Amount" name="amount"
            value = {this.state.amount}
             onChange = {e => this.change(e)}/>
         </div>
         <button className="btn btn-success" onClick={e => this.onSubmit(e)}>Procced</button>
         </div>
    </div>
    </div>
    
  </div>
  </div>
    </div>
    </div>
    </div>
    </div>
</div>
</div>
</body>


    
            
          
          </React.Fragment>
        )
      }
    }

export default Mobile
