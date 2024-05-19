import interfaceForCard from "../../../shared/intForCard";
import "../styles/style.css";

interface CardProps extends interfaceForCard {
    firstValue:string;
    secondValue:string;
}

export default function CardForTodoList({ firstValue, secondValue}: CardProps) {
    return (
        <main className="card-content">
            <div>
                <p>{firstValue}</p>
                <p>{secondValue}</p>
            </div>
        </main>
    );
}
