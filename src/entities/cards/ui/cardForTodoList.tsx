import interfaceForCard from "../../../shared/intForCard";
import CheckIsDone from "../model/checkIsDone";
import "../styles/style.css";

interface CardProps extends interfaceForCard {
    firstValue:string;
    secondValue:string;
    isDone:boolean;
}

export default function CardForTodoList({ firstValue, secondValue, isDone}: CardProps) {
    return (
        <main className="card-content">
            <div>
                <p>{firstValue}</p>
                <p>{secondValue}</p>
            </div>
            <div>
                <CheckIsDone initIsDone={isDone} />
            </div>
        </main>
    );
}
