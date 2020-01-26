import React, { Component } from 'react';
// import Result from './Result'
import {Container, Row, Col, Button,Table} from 'react-bootstrap';



//
//TODO: 
// 1: API call for fetching exiting data "GET"
// 2: API call for sending modified and new Data "POST" and it should return success status.

class MultiForm extends Component{
   fileReader;
  state = {
     inputAdd: {
       "cameraId":[
        {
          name : '',
          email: '',
          phone: ''
        }
       ]
     },
 
    show:false,
  }

  componentDidMount(){
    this.handleFile();
  }

  handleAddData = () => {
    this.setState({
      inputAdd: this.state
                    .inputAdd.concat([{ 
                      camera : '',
                      name : '',
                      email: '',
                      phone: '' }]),
    });
  };


  handleAddData2 = () => {
    this.setState({
      inputAdd2: this.state
                    .inputAdd2.concat([{ 
                      name : '',
                      email: '',
                      phone: '' }]),
    });
  };


   handleFile = () => {
     this.setState({inputAdd: [
      {
        camera : '',
        name : '',
        email: '',
        phone: ''
      }]
    })
    this.setState({csvdata: []})
     fetch('http://localhost:5000/csv/', {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => 
      {
       return response.json() // << This is the problem
      })
    .then((responseData) => { // responseData = undefined

        console.log(responseData.data);
        var data = [];
        var rows = responseData.data.split("\n");
        
        for (var i = 0; i < rows.length; i++) {
          var cells = rows[i].split(",");
          data.push( cells );
        }
        console.log(data)
        for (var j = 1; j < data.length-1; j++) {
          // console.log(data[0].length);
          this.state
          .csvdata.push({ 
           
            camera : data[j][0],
            name : data[j][1],
            email: data[j][2],
            phone: data[j][3] })
            
           }
           this.setState({
             inputAdd:this.state.csvdata
           });
     }).catch((err) =>{
        console.log(err);
      })
  };



  handleShareholderCameraChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, camera: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderPhoneChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, phone: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleShareholderEmailChange = idx => evt => {
    const newShareholders = this.state.inputAdd.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, email: evt.target.value };
    });

    this.setState({ inputAdd: newShareholders });
  };
  handleSubmit = evt => {
    console.log('hey'+this.state.inputAdd[0].camera);
    for (var i = 0; i < this.state.inputAdd.length; i++) {
        if(this.state.inputAdd[i].camera===''||this.state.inputAdd[i].camera===null||this.state.inputAdd[i].camera===undefined){
         alert(`please enter cameraID at row no ${i+1}`);
         break;
       }  if(this.state.inputAdd[i].name===''||this.state.inputAdd[i].name===null||this.state.inputAdd[i].name===undefined){
        alert(`please enter name at row no ${i+1}`);
       break;
      }  if(this.state.inputAdd[i].email===''||this.state.inputAdd[i].email===null||this.state.inputAdd[i].email===undefined){
        alert(`please enter email at row no ${i+1}`);
        break;
      } if(this.state.inputAdd[i].phone===''||this.state.inputAdd[i].phone===null||this.state.inputAdd[i].phone===undefined){
        alert(`please enter phone at row no ${i+1}`);
       break;
      } 
      if(i==((this.state.inputAdd.length)-1)){
        console.log(i);
        fetch('http://localhost:4999/writecsv/', {
         method: 'post',
         dataType: 'json',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
       body: JSON.stringify(this.state.inputAdd)
       })
       .then((response) => 
         {
          return response.json() // << This is the problem
         })
       .then((responseData) => {console.log(responseData)
       this.setState({inputAdd: [
         {
           camera : '',
           name : '',
           email: '',
           phone: ''
         }]
       })
       this.setState({csvdata: []})
       console.log(this.state.csvdata);
       if(responseData.message==='success'){
         window.location.reload();
       }
       if(responseData.message==='failure'){
         this.setState({show:true});
       }
       })
       .catch((err) =>{
         console.log(err);
       }) 

      }
      
      }
   
  };
  handleRemoveData = idx => () => {
    this.setState({
      inputAdd: this.state.inputAdd.filter((s, sidx) => idx !== sidx)
    });
  };

  handleRemoveData2 = idx => () => {
    this.setState({
      inputAdd2: this.state.inputAdd2.filter((s, sidx) => idx !== sidx)
    });
  };

handleEditData = ()=>{
/*   if(this.state.disable){
    this.setState({
      disable: false
    });
  } else {
    this.setState({
      disable: true
    });
  } */
 
}
 


  

  render(){
    return(
     
    <section className="middlePart">
        <Container>
            {this.state.show ? <h1>Some error occoured..please refresh the browser...</h1> : null }  
              <Table bordered>
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Camera Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th></th>
                  
                  </tr>
                </thead>
                <tbody>
                
                {this.state.inputAdd.map((data, id) => (
                    <tr>
                      <td align="center" >
                        <Button variant="primary" 
                        onClick={this.handleAddData2}>
                          +
                        </Button>
                      </td>
                      <td colSpan="5">
                          <Table>
                            <tr>
                              <td rowSpan="100">
                              <input  
                                onChange={this.handleShareholderCameraChange(id)} 
                                type="text" 
                                className="form-control" 
                                placeholder="Camera Id" 
                                value={data.camera} />
                          </td>
                              <td>
                            <input 
                              onChange={this.handleShareholderNameChange(id)} 
                              type="text" 
                              className="form-control" 
                              placeholder="Name" 
                              value={data.name} />
                          </td>
                              <td>
                            <input 
                            onChange={this.handleShareholderEmailChange(id)} 
                            type="text" 
                            className="form-control" 
                            placeholder="Email" 
                            value={data.email}/>
                          </td>
                              <td>
                                  <input 
                                  onChange={this.handleShareholderPhoneChange(id)} 
                                  type="text" 
                                  className="form-control" 
                                  placeholder="Phone No" 
                                  value={data.phone}/>
                              </td>
                              <td>
                                <Button 
                                  variant="primary" 
                                  onClick={this.handleRemoveData(id)}>
                                  Delete
                                </Button>
                              </td>                
                            </tr>


                                  {this.state.inputAdd2.map((data2) => (
                                    <tr>    
                                    <td>
                                      <input 
                                        onChange={this.handleShareholderNameChange(id)} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Name" 
                                        value={data.name} />
                                    </td>
                                    <td>
                                      <input 
                                        onChange={this.handleShareholderEmailChange(id)} 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={data.email}/>
                                    </td>
                                    <td>
                                        <input 
                                          onChange={this. handleShareholderPhoneChange(id)} 
                                          type="text" 
                                          className="form-control" 
                                          placeholder="Phone No" 
                                          value={data.phone}/>
                                    </td>
                                <td>
                                  <Button 
                                    variant="primary" 
                                    onClick={this.handleRemoveData2(id)}>
                                    Delete
                                  </Button>
                                  </td>

                            </tr>
                             ))}
                          </Table>
                      </td>
                        </tr>              
                ))}

            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">
                  <div className="tdSubmit">
                   <Button variant="primary" onClick={this.handleAddData}>Add More</Button>
                   <Button onClick={this.handleSubmit} variant="success">Save Data</Button> 
                  </div>  
                </td>  
               
              </tr>
            </tfoot>
          </Table>
        </Container>
    </section>
  );
}
}
// https://www.youtube.com/watch?v=zifE_wnwnJ8
//https://codepen.io/benhoyle/pen/vyygYN?editors=1010
export default MultiForm;