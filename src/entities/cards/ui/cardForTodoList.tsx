import interfaceForCard from "../../../shared/intForCard";
import CheckIsDone from "../model/checkIsDone";
import "../styles/style.css";

export default function CardForTodoList({firstValue , secondValue, isDone}:interfaceForCard) {
    return(
        <main>
 
            <div>
                <p>{firstValue}</p>
                <p>{secondValue}</p>
            </div>
            <div>
                <CheckIsDone initIsDone={isDone}/>
            </div>

        </main>
    )
};
