
import './App.css';
//import Employees from './Employees.json'

function App() {



    
     
      const userJSONData = `{
      "name": "Alex C",
      "age": 2,
      "city": "Houston"
}`;

      const userObj = JSON.parse(userJSONData);
      console.log(userObj);

  
  
}
<div>
  <h1>SideHustle</h1>
</div>
export default App;
