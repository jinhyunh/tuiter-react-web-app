import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function DynamicStyling() {
    return (
        <>
            <h2>Dynamic Styling</h2>
            <TodoList />
            <TodoItem />
            <ConditionalOutput />
            <Styles />
            <Classes />
        </>
    )
}
export default DynamicStyling