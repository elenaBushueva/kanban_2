import {upperFirst} from 'lodash';
import Task from "./Task";


function Panel(props) {

    const colorMap = {
        todo: "border-secondary",
        progress: "border-primary",
        review: "border-warning",
        done: "border-success",
    }

    return (
        <div className="">
            <h3 class={`border-bottom border-4 pb-2 ${colorMap[props.status]}`}>{upperFirst(props.status)}</h3>
            {
                props.tasks
                    .filter(task => task.status === props.status)
                    .map(task =>
                        <Task
                            task={task}
                            left={props.left}
                            right={props.right}
                        />)
            }
        </div>
    );
}

export default Panel;
