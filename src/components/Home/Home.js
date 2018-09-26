import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
class Home extends Component {
    showDiv = e  => {
        document.getElementById('welcomeDiv').style.display = "block";
    }
    render() {
        return (
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
{/*                
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex no-block align-items-center">
                                        <div>
                                            <h3><i className="fa fa-desktop" aria-hidden="true"></i></h3>
                                            <p className="text-muted">MYNEW CLIENTS</p>
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="counter text-primary">23</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="progress">
                                        <div className="progress-bar bg-primary custom-ap-style" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex no-block align-items-center">
                                        <div>
                                            <h3><i className="fa fa-pencil-square-o" aria-hidden="true"></i></h3>
                                            <p className="text-muted">NEW PROJECTS</p>
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="counter text-cyan">169</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="progress">
                                        <div className="progress-bar bg-cyan custom-ap-style" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex no-block align-items-center">
                                        <div>
                                            <h3><i className="fa fa-file-o" aria-hidden="true"></i></h3>
                                            <p className="text-muted">NEW INVOICES</p>
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="counter text-purple">157</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="progress">
                                        <div className="progress-bar bg-purple custom-ap-style" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex no-block align-items-center">
                                        <div>
                                            <h3><i className="fa fa-suitcase" aria-hidden="true"></i></h3>
                                            <p className="text-muted">All PROJECTS</p>
                                        </div>
                                        <div className="ml-auto">
                                            <h2 className="counter text-success">431</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="progress">
                                        <div className="progress-bar bg-success custom-ap-style" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
         
                {/*content here*/}
                    {/* <div className="custom-content-here">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-parent-padd">
                            <div className="card">
                            <div className="card-body">
                            <div className="upper-custom-card">
                                <p><strong>Rs. 43.15</strong></p>
                                <p>Your Wallet Balance</p>
                            </div>
                            </div>
                            </div>
                            </div>

                             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-parent-padd">
                            <div className="card">
                            <div className="card-body">
                            <div className="upper-custom-card">
                                <p><strong>Rs. 43.15</strong></p>
                                <p>Your Wallet Balance</p>
                            </div>
                            </div>
                            </div>
                            </div>

                             <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-parent-padd">
                            <div className="card">
                            <div className="card-body">
                            <div className="upper-custom-card">
                                <p><strong>Rs. 43.15</strong></p>
                                <p>Your Wallet Balance</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div> */}

                 {/*end content here*/}                 
         
         {/* new content section here */}
               <section className="custom-content-section">
                   <div className="container">
                       <div className="row">
                       <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 custom-upper-sec">
                       <div className="custom-wallet">
                           <p><strong>Rs. 41.53</strong></p>
                           <p>Your Wallet Balance</p> 
                       </div>
                        </div>

                        <div  className="col-lg-8 col-md-8 col-sm-12 col-xs-12 custom-upper-sec">
                            <div className="custom-form-here">
                               
                                {/* <input type="text" className="form-control custom-input-field" placeholder="Enter Amount To Add In Wallet" name="amount" />
                                <button type="button" className="btn btn-info custom-btn-wallet">Add Money to Wallet</button> */}
                                <form>
  <div class="form-row">
    <div class="form-group col-md-8">
      <input type="text" class="form-control custom-amount-input" id="inputEmail4" placeholder="Enter Amount to Add Money to Wallet" name="amount" />
    <small><strong>Have a Promo code?</strong></small>
    </div>
    <div class="form-group col-md-4">
    <button type="submit" class="btn btn-primary form-control custom-money-btn">Add Money to Wallet</button>
    </div>
  </div>
</form>
                                
                            </div>
                        </div>
                       </div> 
                   </div> 
               </section>         
         {/*end content section here */}

         {/*vertical tabs */}
            <section className="vertical-content">
               <div className="container">
                   <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="sidebar-tabs">
                      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
      Personal Info
  </a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
      Address
  </a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
      Change Password
  </a>
  <a class="nav-link" id="v-pills-merchants-tab" data-toggle="pill" href="#v-pills-nerchants" role="tab" aria-controls="v-pills-settings" aria-selected="false">
      Merchants Authorized By You
  </a>
  <a class="nav-link" id="v-pills-favourites-tab" data-toggle="pill" href="#v-pills-favourites" role="tab" aria-controls="v-pills-settings" aria-selected="false">
     Favourites 
  </a>
  <a class="nav-link" id="v-pills-payment-tab" data-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-settings" aria-selected="false">
    Automatic Payment
  </a>
</div>
</div>
</div>
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
     <div className="custom-tab-content-here">                           
           <div className="row">
               <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Name</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Aakash Paliwal</strong></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Email</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>aakashpaliwal00@gmail.com</strong></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Mobile Number</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>8764049523</strong></p>            
                   </div>     

                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Date Of Birth</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>**/**/*95</strong></p>            
                   </div>

                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>Gender</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Male</strong></p>            
                   </div> 

                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 custom-field-here">
                   <p>KYC Status</p>
                   </div>
                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 custom-read-data">
                    <p className="read-data-here"><strong>Complete</strong></p>            
                   </div>             
               </div>                     
           </div>                     
    </div>

  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
  <div className="custom-tab-content-here">                           
           <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom-field-here">
                   {/* <p>Name</p> */}
                  
<button type="button" className="btn btn-primary custom-show-btn" name="answer" value="Show Div" onClick={e => this.showDiv(e)}>
<i className="fa fa-plus"></i>
<p>Add New Address</p>
</button>
 <div id="welcomeDiv"  class="answer_list" >
     <form className="custom-form-address">
     <p><strong>Add New Address </strong></p>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputEmail4" placeholder="Pin Code" />
    </div> 
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputPassword4" placeholder="Full Name"/>
    </div>
  </div>
  <div class="form-group">
    <input type="text" class="form-control custom-amount-input" id="inputAddress" placeholder="Address Line 1"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control custom-amount-input" id="inputAddress2" placeholder="Address Line 2"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputCity" placeholder="city" />
    </div>
    <div class="form-group col-md-6">
      <input type="text" class="form-control custom-amount-input" id="inputCity" placeholder="State" />
    </div>
    <div class="form-group col-md-12">
      <input type="number" class="form-control custom-amount-input" id="inputZip" placeholder="Mobile Number"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary form-control custom-money-btn">Save Address</button>
</form>
 </div>
                   </div>          
               </div>                     
           </div>    

  </div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <div className="custom-tab-content-here">
        <div className="row">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
           <form className="custom-form-address2">
     <p><strong>Change Psssword </strong></p>
  <div class="form-row">
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputEmail4" placeholder="Enter Old Password" />
    </div> 
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputPassword4" placeholder="Enter New Password"/>
    </div>
    <div class="form-group col-md-12">
      <input type="password" class="form-control custom-amount-input" id="inputPassword4" placeholder="Re - Enter New Password"/>
    </div>
  </div>
  <button type="submit" class="btn btn-primary form-control custom-money-btn">Save Password</button>
</form>                 
           </div>                     
        </div>                        
      </div>
  </div>
  <div class="tab-pane fade" id="v-pills-merchants" role="tabpanel" aria-labelledby="v-pills-merchants-tab">........dummy content..........</div>
  <div class="tab-pane fade" id="v-pills-favourites" role="tabpanel" aria-labelledby="v-pills-favourites-tab">........dummy Favorites content..........</div>
</div>    
       
                      </div>              
                   </div>                 
                   </div>   
            </section>                    
         {/*end vertical tabs */}
               
            </div>
          
        </div>
           </body>
        );
    }
}

export default Home;