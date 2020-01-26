import React from 'react';
import {Container, Row, Col, Button,Table} from 'react-bootstrap';
function Testing(){
  return(
<Container>
  <Table bordered>
    <thead>
      <tr>
        <th></th>
        <th>Camera Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone No</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
      <tr>
          <td>Add More</td>
          <td colSpan="5">
            <Table>
              <tr >
                <td rowspan="100"><input type="text" class="form-control" placeholder="Camera Id" /></td>
                <td><input type="text" class="form-control" placeholder="Name" /></td>
                <td><input type="text" class="form-control" placeholder="Email" /></td>
                <td><input type="text" class="form-control" placeholder="Phone No"/></td>
                <td><Button variant="primary">Delete</Button></td> 
              </tr>

              <tr>
                <td><input type="text" class="form-control" placeholder="Name" /></td>
                <td><input type="text" class="form-control" placeholder="Email" /></td>
                <td><input type="text" class="form-control" placeholder="Phone No"/></td>
                <td><Button variant="primary">Delete</Button></td> 
              </tr>

              <tr>
                <td><input type="text" class="form-control" placeholder="Name" /></td>
                <td><input type="text" class="form-control" placeholder="Email" /></td>
                <td><input type="text" class="form-control" placeholder="Phone No"/></td>
                <td><Button variant="primary">Delete</Button></td> 
              </tr>
              
            </Table>  
          </td>         
      </tr>

      <tr>
          <td>Add More</td>
          <td colSpan="5">
            <Table>
              <tr>
                <td><input type="text" class="form-control" placeholder="Camera Id" /></td>
                <td><input type="text" class="form-control" placeholder="Name" /></td>
                <td><input type="text" class="form-control" placeholder="Email" /></td>
                <td><input type="text" class="form-control" placeholder="Phone No"/></td>
                <td><Button variant="primary">Delete</Button></td> 
              </tr>
              <tr>
                <td><input type="text" class="form-control" placeholder="Camera Id" /></td>
                <td><input type="text" class="form-control" placeholder="Name" /></td>
                <td><input type="text" class="form-control" placeholder="Email" /></td>
                <td><input type="text" class="form-control" placeholder="Phone No"/></td>
                <td><Button variant="primary">Delete</Button></td> 
              </tr>
             
            </Table>  
          </td>         
      </tr>

    </tbody>
    
  </Table>
</Container>
    

  )
}

export default Testing;


// https://stackoverflow.com/questions/47402365/how-to-have-nested-loops-with-map-in-jsx