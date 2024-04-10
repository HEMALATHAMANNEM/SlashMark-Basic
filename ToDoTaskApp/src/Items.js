import React, { useState } from "react";

function ViewItems() {
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [status,setStatus]=useState("Not completed");
  const [citems, setCItems] = useState([]);
  const [pitems, setPItems] = useState([]);
  const [cdisplay,setCDisplay]=useState(false);
  const [pdisplay,setPDisplay]=useState(false);
  const handleAddItem = () => {
    if(item!=="" && description!==""){
       setItem("");
       setDescription("");
       setStatus("Not completed");
       setPDisplay(true);
       setPItems([...pitems,{ item: item, description:description , status:status }]);
    }
  };
  const handleDelete = (item) => {
    const aitems = citems.filter((it) => it.item !== item.item);
    setCItems([...aitems]);
    //console.log(citems,citems.length);
    if (citems.length==0){
      setCDisplay(false);
    }
    const bitems = pitems.filter((it) => it.item !== item.item);
    setPItems([...bitems]);
    //console.log(pitems,pitems.length);
    if (pitems.length==0){
      setPDisplay(false);
    }
  };
  const handleComplete = (item) => {
    pitems.map((it) => {
      if (it.item === item.item) {
        let date=new Date();
        let sdate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
        setCItems([...citems,{...it,status:"Completed",date:sdate }])
        setCDisplay(true);
        return {
          ...it,
          status:"Completed",
          date:new Date(),
        };
      } else {
        return it;
      }
    });
    const bitems = pitems.filter((it) => it.item !== item.item);
    setPItems([...bitems]);
    //console.log(pitems);
    if (pitems.length==0){
      setPDisplay(false);
    }
  };
 
    const cdata = citems.map(
    (it, index) => (
      <tr key={index}>
        <td>{it.item}</td><td>{it.description}</td><td>{it.status}</td><td>{it.date}</td>
        <td>
          <button onClick={() => handleDelete(it)}>Remove</button>
        </td>
      </tr>
    ),
    [])

    const pdata = pitems.map(
    (it, index) => (
      <tr key={index}>
        <td>{it.item}</td><td>{it.description}</td><td>{it.status}</td>
        <td>
          <button onClick={() => handleDelete(it)}>Remove</button>
        </td>
        <td>
          <button onClick={() => handleComplete(it)}>Completed</button>
        </td>
      </tr>
    ),
    []


  );
  return (
    <div>
      <center>
        <br/><br/>
      <form>
        <br/><br/>
         <input type="text" name="title" placeholder="Title" value={item}
        onChange={(e) => setItem(e.target.value)} required/>
         <br/><br/>
         <textarea name="description" placeholder="Description" value={description}
        onChange={(e) => setDescription(e.target.value)} required></textarea>
         <br/><br/>
         <input type="button" value="Add" onClick={() => handleAddItem()}/>
      </form>
      
      {pdisplay && <div className="pendingItems">
         <h1>Pending Items</h1>
          <table>
            <tr className="titledec"><td>Title</td><td>Description</td><td>Status</td><td>Remove</td><td>Update Status</td></tr>
            {pdata}
          </table>
      </div>}

      {cdisplay && <div className="completedItems">
         <h1>Completed Items</h1>
          <table>
            <tr className="titledec"><td>Title</td><td>Description</td><td>Status</td><td>Completed On</td><td>Remove</td></tr>
            {cdata}
          </table>
      </div>}
      
    </center>
  </div>
  );
}

export default ViewItems;
