import { useEffect, useState } from 'react';

// components
import WorkoutDetails from '../components/WorkoutDetails';

export default function Home() {
    const host = 'localhost';
    const port = 8000;

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok) {
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, []);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
        </div>
    );
}