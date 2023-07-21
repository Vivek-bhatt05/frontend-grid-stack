import React, { useEffect, useState } from 'react'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GridLayout from "react-grid-layout";
import axios from 'axios';

const GridLayoutComponent = () => {

    const [layout,setLayout] =useState([]);
    const [newWidgetData, setNewWidgetData] = useState({
    x: 0,
    y: 0,
    w: 10,
    h: 100,
    content: '',
     });



    useEffect(() => {
        fetchWidgets().then((data) => {
            setLayout(data);
          });
     }, []);

      const addWidget = async () => {
    try {
      const response = await fetch('http://localhost:4000/widgets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWidgetData),
      });

      if (response.ok) {
        const newWidget = await response.json();
        setLayout([...layout, newWidget]);
        setNewWidgetData({ // Clear the form after adding the widget
          x: 0,
          y: 0,
          w: 2,
          h: 1,
          content: '',
        });
      } else {
        console.error('Failed to add widget:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding widget:', error);
    }
  };

    const fetchWidgets = async () => {
        try {
            const response = await fetch('http://localhost:4000/widgets'); 
            const data = await response.json();
            console.log(data)
            return data;
          } catch (error) {
            console.error('Error fetching layout:', error);
            return [];
          }
         };


    const handleGridChange = async (updatedlayout) => {
        console.log(updatedlayout)
        
            updatedlayout.forEach(async (item) => {
              const { i:_id , x, y, w, h } = item;
              console.log(_id)
              try {
                await axios.patch(`http://localhost:4000/widgets/${_id}`, {
                  x,
                  y,
                  w,
                  h,
                });
              } catch (error) {
                console.error('Error updating widget:', error);
              }
            });
          };

  return (
    <>
     {/* updating button  */}

        <button>Save</button>

    {/* widget adding form */}

        <div>
          <h3>Add Widget</h3>
          <form onSubmit={(e) => { e.preventDefault(); addWidget(); }}>
          <label>X Position:</label>
          <input
            type="number"
            value={newWidgetData.x}
            onChange={(e) => setNewWidgetData({ ...newWidgetData, x: parseInt(e.target.value) })}
          />
          <label>Y Position:</label>
          <input
            type="number"
            value={newWidgetData.y}
            onChange={(e) => setNewWidgetData({ ...newWidgetData, y: parseInt(e.target.value) })}
          />
          <label>Width:</label>
          <input
            type="number"
            value={newWidgetData.w}
            onChange={(e) => setNewWidgetData({ ...newWidgetData, w: parseInt(e.target.value) })}
          />
          <label>Height:</label>
          <input
            type="number"
            value={newWidgetData.h}
            onChange={(e) => setNewWidgetData({ ...newWidgetData, h: parseInt(e.target.value) })}
          />
          <label>Content:</label>
          <input
            type="text"
            value={newWidgetData.content}
            onChange={(e) => setNewWidgetData({ ...newWidgetData, content: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>
      </div>


{/* widget display section */}
       <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        onResizeStop={(e)=>{
            console.log("Size",e)
            handleGridChange(e)
        }}
        onDragStop={(e)=>{
            console.log("Drag",e)
            handleGridChange(e)
        }}
      >

       {layout?.map((box)=>(
         <div key={box._id}>{box.content}</div>
       ))}

      </GridLayout>
   </>

  )
}

export default GridLayoutComponent


//  <GridLayout
//         className="layout"
//         layout={layout}
//         cols={12}
//         rowHeight={30}
//         width={1400}
//         onResizeStop={(e)=>{
//             console.log("Size",e)
//             handleGridChange(e)
//         }}
//         onDragStop={(e)=>{
//             console.log("Drag",e)
//             handleGridChange(e)
//         }}
//       >

//        {layout?.map((box)=>(
//          <div key={box._id}>{box.content}</div>
//        ))}

//       </GridLayout> 