
import React, { Component } from 'react';
import './App.css';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtEmail: '',
      txtPassword: '',
      chkbStatus: true
    }
  }

  onHandleChange = (event) =>{
    let target = event.target;
    let name = target.name;
    let value = target.type==='check box' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    
    
    
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="heading">
                <h1 className="panel-title title">EQUIX</h1>
              </div>
              <div className="panel-body form-body">
                <form onSubmit={this.onHandleSubmit}>
                
                  <div className="form-group">
                    <label className="title1">Login to your account</label>
                    <br></br>
                    <button type="submit" className="btn">Live</button>&nbsp;
                    <button type="submit" className="btn btn1">Demo</button>
                    <br></br>
                    <br></br>
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Email"
                      name="txtEmail" 
                      value= {this.state.txtEmail}
                      onChange= {this.onHandleChange}
                      ></input>
                  </div>
                  <div className="form-group">
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder="Password"
                      name="txtPassword" 
                      value= {this.state.txtPassword}
                      onChange= {this.onHandleChange}
                      ></input>
                  </div>


                  <div className="checkbox">
                    <label>
                      <input type="checkbox" 
                      name="chkbStatus"
                      value={true}
                      onChange={ this.onHandleChange }
                      checked={this.state.chkbStatus===true}
                      />
                      Stay logged in
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-sm">Sign In (LIVE)</button>
                  <div className="footer d-flex ">
                        
                            <button className="footer__btn">Login</button>
                            <button className="footer__btn">Forgot password?</button>
                            <button className="footer__btn">Active user</button>
                    </div>

                </form>
              </div>
            </div>
      
          </div>

        </div>
      </div>
      
    )
    
   }
    
  }

export default Test;
