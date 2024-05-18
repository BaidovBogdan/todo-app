import "../style/style.css";
import { useState } from "react";
import interfaceForCard from "../../../shared/intForCard";
import CardForTodoList from "../../../entities/cards/ui/cardForTodoList";
import checkIsDone from "../../../entities/cards/model/checkIsDone";

export default function Inputs() {
    const [firstValue , setFirstValue] = useState("");
    const [secondValue , setSecondValue] = useState("");
    const [cards , setCards] = useState<interfaceForCard[]>([]);

    const addCard = () => {
        setCards([...cards , {firstValue , secondValue , isDone:false}])
        setFirstValue("");
        setSecondValue("");
    }

    return(
        <>
            <input type="text" value={firstValue} onChange={e => setFirstValue(e.target.value)} placeholder="Тема"/>
            <br />
            <input type="text" value={secondValue} onChange={e => setSecondValue(e.target.value)} placeholder="Подробно" />
            <button onClick={addCard}>Сохранить</button>
            <div>
                {cards.map((cards , index) => (
                    <div key={index}>
                        <CardForTodoList firstValue={firstValue} secondValue={secondValue} isDone={false} />
                    </div>
                ))}
            </div>
        </>
    )
};
