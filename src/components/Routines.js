import React, { useState, useEffect } from 'react';

import { showPublicRoutines } from '../api';

const Routines = () => {
  const [publicRoutines, setPublicRoutines] = useState([]);

  const getAllPublicRoutines = async () => {
    const publicRoutines = await showPublicRoutines();
    const isPublic = await publicRoutines.filter(
      (ele) => ele.isPublic === true
    );
    setPublicRoutines(isPublic);
    return;
  };

  useEffect(() => {
    getAllPublicRoutines();
  }, []);

  return (
    <>
      <h2>this is public routines</h2>
      <ul>
        {publicRoutines.map((rtn) => (
          <li key={rtn.id}>
            {rtn.name}: {rtn.goal}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Routines;
