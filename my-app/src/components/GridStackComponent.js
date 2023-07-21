import React, { useEffect } from "react";
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.css';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';

const GridStackComponent=()=> {

    useEffect(() => {
        var grid = GridStack.init();
    });

    return (
        <div className="App">
            <div className="grid-stack">
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 1</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 2</div>
                </div>
                <div className="grid-stack-item border-dark" data-gs-width="4" data-gs-height="4">
                    <div className="grid-stack-item-content">Item 3</div>
                </div>
            </div>
        </div>
    );
}

export default GridStackComponent;




// import React, { useRef, useEffect, useState } from 'react';
// import 'gridstack/dist/gridstack.min.css';
// import 'gridstack/dist/gridstack-extra.min.css';
// // import 'gridstack/dist/gridstack.min.js';
// // import 'gridstack/dist/h5/gridstack-dd-native';

// // import { GridStack } from 'react-gridstack';
// import {GridStack} from 'gridstack';

// const GridStackComponent = () => {
//   const gridRef = useRef(null);
//   const [widgets, setWidgets] = useState([]);
//   const [newWidgetData, setNewWidgetData] = useState({
//     x: 0,
//     y: 0,
//     width: 2,
//     height: 1,
//     content: '',
//   });

//   useEffect(() => {
//     if (gridRef.current) {
//         const grid = GridStack.init({
//           float: true, 
//         }, gridRef.current);

//         fetchWidgets().then((data) => {
//             setWidgets(data);
//           });

//         return () => {
//           grid.destroy();
//         };
//       }
//   }, []);

//   const fetchWidgets = async () => {
//     try {
//         const response = await fetch('http://localhost:4000/widgets'); 
//         const data = await response.json();
//         console.log(data)
//         return data;
//       } catch (error) {
//         console.error('Error fetching widgets:', error);
//         return [];
//       }
//   };

//   const addWidget = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/widgets', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newWidgetData),
//       });

//       if (response.ok) {
//         const newWidget = await response.json();
//         setWidgets([...widgets, newWidget]);
//         setNewWidgetData({ // Clear the form after adding the widget
//           x: 0,
//           y: 0,
//           width: 2,
//           height: 1,
//           content: '',
//         });
//       } else {
//         console.error('Failed to add widget:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding widget:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="grid-stack" ref={gridRef}>
//         {widgets.map((widget) => (
//           <div
//             key={widget._id}
//             className="grid-stack-item"
//             data-gs-x={widget.x}
//             data-gs-y={widget.y}
//             data-gs-width={widget.width}
//             data-gs-height={widget.height}
//           >
//             {widget.content}
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Add Widget</h3>
//         <form onSubmit={(e) => { e.preventDefault(); addWidget(); }}>
//           <label>X Position:</label>
//           <input
//             type="number"
//             value={newWidgetData.x}
//             onChange={(e) => setNewWidgetData({ ...newWidgetData, x: parseInt(e.target.value) })}
//           />
//           <label>Y Position:</label>
//           <input
//             type="number"
//             value={newWidgetData.y}
//             onChange={(e) => setNewWidgetData({ ...newWidgetData, y: parseInt(e.target.value) })}
//           />
//           <label>Width:</label>
//           <input
//             type="number"
//             value={newWidgetData.width}
//             onChange={(e) => setNewWidgetData({ ...newWidgetData, width: parseInt(e.target.value) })}
//           />
//           <label>Height:</label>
//           <input
//             type="number"
//             value={newWidgetData.height}
//             onChange={(e) => setNewWidgetData({ ...newWidgetData, height: parseInt(e.target.value) })}
//           />
//           <label>Content:</label>
//           <input
//             type="text"
//             value={newWidgetData.content}
//             onChange={(e) => setNewWidgetData({ ...newWidgetData, content: e.target.value })}
//           />
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default GridStackComponent;

