import React, {useState} from 'react'
import './DropArea.css'
const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false);
  return (
   <section className={showDrop ? "drop_area":"hide_drop"} 
   onDragEnter={() => setShowDrop(true)} 
   onDragLeave={() => setShowDrop(false)} 
   onDrop={() =>{
    onDrop();
    setShowDrop(false);
   }}
    onDragOver={(e) => e.preventDefault()}
   >
     {showDrop ? "Release to drop" : "Drop here"}
   </section>
  )
}

export default DropArea
