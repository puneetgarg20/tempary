import './App.css';
import { Display } from "./component/Display"
import React, { useState, useEffect } from 'react';


function App() {
  const [data, setdata] = useState([{ name: "K", age: 22, occupation: "MBBS Student" }]);
  const [id, setid] = useState(0);
  const [num, setnum] = useState(0);
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [occupation, setoccupation] = useState("");
  function gettingdata() { fetch("http://localhost:5000/getdata", { method: "GET" }).then((res => { return res.json() })).then((data => { setdata(data); console.log(data) })) };

  useEffect(() => {
    console.log("Started")
    // setdata([{ name: "K", age: 22, occupation: "MBBS Student" }]);
    gettingdata();


  }, [])

  const handlesubmit = () => {

    console.log("request send");
    fetch("http://localhost:5000/postdata", { method: "POST", headers: { "Content-Type": 'application/json', }, body: JSON.stringify({ name: name, age: age, occupation: occupation }) }).then((res) => res.json()).then((data) => {
      gettingdata();
    });

    // axios.post("http://localhost:5000/postdata", { name: name, age: age, occupation: occupation }).then((res) => console.log(res)).catch((e) => console.log(e));



  }

  return (
    <div className="App">
      <h1>CRUD { num }</h1>
      <div>

      </div>
      <div>

        <div>
          <div>
            <label>Enter Name</label>
            <input type="text" value={ name } placeholder={ "Enter Name" } onChange={ (e) => setname(e.target.value) }  ></input>
          </div>
          <div>
            <label>Enter Age</label>
            <input type="number" value={ age } placeholder={ "Enter Age" } onChange={ (e) => setage(e.target.value) }  ></input>
          </div>
          <div>
            <label>Enter Occupation</label>
            <input type="text" value={ occupation } placeholder={ "Enter Occupation" } onChange={ (e) => setoccupation(e.target.value) }   ></input>
          </div>
          <button onClick={ handlesubmit }> Add</button>
        </div>
        { data.map((value, index) => {
          return (
            <div style={ { margin: "0 auto ", width: "60%" } }>
              < Display props={ { value, gettingdata } } />

            </div>
          )
        }) }
      </div>
    </div>
  );
}

export default App;
