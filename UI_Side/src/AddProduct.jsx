import { useState } from 'react';

export default function Form() {
  const [item, setItems] = useState({
   item: "",
  });

  return (
    <>
      <label>
        <button>Add Items</button>
        <input
          value={item.firstName}
          onChange={e => {
            setItems({
              ...item,
              firstName: e.target.value
            });
          }}
        />
      </label>
     
   
      
    </>
  );
}
