import React from 'react';
import {Button,Table} from 'react-bootstrap';
function Result(){
  return(
    <section className="outPut">
      <Table striped bordered>
        <thead>
          <tr>
            
            <th>Camera Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" class="form-control" placeholder="Camera Id" disabled/></td>
            <td><input type="text" class="form-control" placeholder="Name" disabled/></td>
            <td><input type="text" class="form-control" placeholder="Email" disabled/></td>
            <td><input type="text" class="form-control" placeholder="Phone No" disabled/></td>
            <td align="center"><Button variant="primary">Edit</Button></td>
          </tr>
          
        </tbody>
      </Table>
   </section>
  )
}

export default Result;


// const ImportFromFileBodyComponent = () =>{
//   let fileReader;

//   const handleFileRead = (e) => {
//       const content = fileReader.result;
//       console.log(content);
//   };

//   const handleFileChosen = (file) => {
//       fileReader = new FileReader();
//       fileReader.onloadend = handleFileRead;
//       fileReader.readAsText(file);
//   };

//   return <div className='upload-expense'>
//       <input type='file'
//               id='file'
//               className='input-file'
//               accept='.csv'
//               onChange={e => handleFileChosen(e.target.files[0])}
//       />
//   </div>;
// };


// export default ImportFromFileBodyComponent;