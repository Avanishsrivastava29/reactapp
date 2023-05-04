import React, { useState } from 'react';
import AddEventForm from "./Bookticket";

function AddEventButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      <button onClick={handleClick}>Book tickets</button>
      {isFormVisible && < AddEventForm/>}
    </>
  );
}

export default AddEventButton;
