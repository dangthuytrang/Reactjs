
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: 'abc',
      txtPassword: '123',
      txtDes: 'hhh',
      sltGender: 0,
      rdLang: "vn",
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
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                
                  <div className="form-group">
                    <label>Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="txtName" 
                      value= {this.state.txtUsername}
                      onChange= {this.onHandleChange}
                      ></input>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="txtPassword" 
                      value= {this.state.txtPassword}
                      onChange= {this.onHandleChange}
                      ></input>
                  </div>

                  <div className="form-group">
                    <label>Mô tả</label>
                    <textarea  className="form-control" rows="3"
                    name="txtDes"
                    value= {this.state.txtDes}
                    onChange={ this.onHandleChange }></textarea>

                  </div>
                  <label>Giới tính</label>
                  <select className="form-control" 
                  name="sltGender" 
                  value={ this.state.sltGender }
                  onChange={ this.onHandleChange }
                  >
                    <option value={0}>Nữ</option>
                    <option value={1}>Nam</option>
                  </select>
                  <br/>

                  <label>Ngôn ngữ</label>
                  <div className="radio">
                    <label>
                      <input 
                      type="radio" 
                      name="rdLang" 
                      value="en"
                      onChange={ this.onHandleChange }
                      checked={this.state.rdLang==="en"}
                      />
                      Tiếng Anh2
                    </label><br/>
                    <label>
                      <input type="radio" 
                      name="rdLang" 
                      value="vn"
                      onChange={ this.onHandleChange }
                      checked={this.state.rdLang==="vn"}
                      />
                      Tiếng Việt
                    </label>
                  </div>

                  <div className="checkbox">
                    <label>
                      <input type="checkbox" 
                      name="chkbStatus"
                      value={true}
                      onChange={ this.onHandleChange }
                      checked={this.state.chkbStatus===true}
                      />
                      Trạng thái
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-default">Xóa</button>

                </form>
              </div>
            </div>
      
          </div>

        </div>
      </div>
      
    )
    
   }
    
  }

export default App;
