function Student(props) {
    return(
        <div>
            <h1> Welcome to Full Stack Development - 1 </h1>
            <p> React JS Programming Week09 Lab exercise </p>

            <p> Name: {props.name}</p>
            <p> ID: {props.studentID}</p>
            <p> College: {props.college}</p>
            
        </div>
    );
}

export default Student;