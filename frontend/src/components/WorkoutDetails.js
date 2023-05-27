export default function WorkoutDetails({ workout }) {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p><strong>Load (lbs): </strong>{workout.load}</p>
            <p>{workout.createdAt}</p>
        </div>
    );
}