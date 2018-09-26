import React, { Component } from 'react';

class Formfirebase extends Component {
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

                    <div className="fire-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </body>
          </React.Fragment>
        );
    }
}

export default Formfirebase;