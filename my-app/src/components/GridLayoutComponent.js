import React from 'react'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import GridLayout from "react-grid-layout";

const GridLayoutComponent = () => {

    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2,  },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];

  return (
       <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        style={{backgroundColor:"black"}}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
        <div key="d">d</div>
        <div key="e">e</div>
      </GridLayout>
  )
}

export default GridLayoutComponent
