"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import styles from './page.module.css'
import Shape from './rectangleGame/shape'
import Modal from './rectangleGame/createShapeModal'
import RectangleCard from './rectangleGame/rectangleCard'
import { useMousePosition } from './rectangleGame/hooks/windowResizeHook';


export default function Home() {
  const [openModal, setOpenModal] = React.useState(false)
  const [shapes, setShapes] = useState([])
  const [cardDetails, setCardDetails] = React.useState({})
  const mousePosition = useMousePosition()

  const handleMouseMove = (e, name) => {
    const rect = e.target.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(rect.bottom - e.clientY);
    
    setCardDetails({x, y, name})
  };

  const handleMouseOut = () => {
    setCardDetails({})
  };

  return (
    <main className={styles.main}>
      {`DEBUG: (${mousePosition.x},${mousePosition.y})`}

      {openModal &&<Modal setOpenModal={setOpenModal} setShapes={setShapes} />}
      {shapes.map((shape, index) => (
        <Shape key={index} shape={shape} handleMouseOut={handleMouseOut} handleMouseMove={handleMouseMove} />
      ))}
      <RectangleCard cardDetails={cardDetails} setOpenModal={setOpenModal}/>
    </main>
  )
}
