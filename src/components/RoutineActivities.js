import React, {useState, useEffect} from 'react';
import DeleteRoutineActivity from './deleteActivityRoutine';
import UpdateRoutineActivity from './editActivityRoutine';
import { showPublicRoutines } from '../api';
import { getCurrentData } from '../utils/auth';

const RoutineActivities = () => {
    const [privateRoutine, setPrivateRoutines] = useState([]);
    const [routineActivityId, setRoutineActivityId] = useState ('')
    const username = getCurrentData('username');
    

    const getAllPublicRoutines = async () => {
        const publicRoutines = await showPublicRoutines();
        const myRoutines = publicRoutines.filter(
          (routine) => routine.creatorName === username
        );
        console.log(myRoutines);
        return myRoutines;
      };
    
      useEffect(() => {
        const fetchData = async () => {
          const data = await getAllPublicRoutines();
          setPrivateRoutines(data);
        };
        fetchData();
      }, []);

      const getRoutineActivityId = async () => {
        const publicRoutines = await showPublicRoutines();
        const myRoutines = publicRoutines.filter(
          (routine) => routine.creatorName === username
        );
        // for (let i = 0; i < myRoutines.activities.length; i++){
        //     for (let k = 0; k <  )
        // }
      }


    return(
        <div>
            {privateRoutine.map((routine) =>{
                return(
                    <div>
                    <div>
                        <h2>{routine.name}</h2>
                    </div>
                    <div>
                    {routine.activities.map((activity, indx)=>{
                        return(
                      <div key = "activityIdKey">
                      <h3>Activity:{activity.name}</h3>
                      <h3>Description:{activity.description}</h3>
                      <h3>Duration:{activity.duration}</h3>
                      <h3>Count:{activity.count}</h3>
                      <div>
                      {/* <UpdateRoutineActivity/> */}
                      <DeleteRoutineActivity/>
                      </div>
                      </div>
                        )
                      })}
                      </div>
                      </div>
                )
            })}
            
        </div>

    )
}

export default RoutineActivities