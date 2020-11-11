

function Task(props) {


    return (
        <div className="">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.task.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    {props.task.status !== 'todo' &&
                    <a href="#" className="card-link" onClick={() => props.left(props.task.id)}>left</a>}
                    {props.task.status !== 'done' &&
                    <a href="#" className="card-link" onClick={() => props.right(props.task.id)}>right</a>}
                </div>
            </div>
        </div>
    );
}

export default Task;
