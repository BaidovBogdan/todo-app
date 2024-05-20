import "../style/style.css";
import { useState } from "react";
import interfaceForCard from "../../../shared/intForCard";
import CardForTodoList from "../../../entities/cards/ui/cardForTodoList";
import Edit from "./Edit";
import Delete from "./Delete";
import Modal from "react-modal";
import CheckBox from "./CheckBox";

export default function Inputs() {
    const [firstValue , setFirstValue] = useState("");
    const [secondValue , setSecondValue] = useState("");
    const [isDone , setIsDone] = useState(false);
    const [cards , setCards] = useState<interfaceForCard[]>([]);
    const [modalIsOpen , setIsOpen] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

    const customStyles = {
        content: {  
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    const closeModal = () => {
        setIsOpen(false);
        if (currentEditIndex !== null) {
            const updatedCards = [...cards];
            updatedCards[currentEditIndex] = { firstValue, secondValue};
            setCards(updatedCards);
            setCurrentEditIndex(null);
        }
        setFirstValue("");
        setSecondValue("");
    }

    const addCard = () => {
        if(firstValue.length <= 0 || secondValue.length <= 0 ){
            alert("Введите текст");
        }
        else{
            setCards([...cards , {firstValue , secondValue}]);
            setFirstValue("");
            setSecondValue("");
        }
    };

    const onDelete = (index: number) => {
        setCards(cards.filter((_, cardIndex) => cardIndex !== index));
    };

    const onEdit = (index: number) => {
        setCurrentEditIndex(index);
        setFirstValue(cards[index].firstValue);
        setSecondValue(cards[index].secondValue);
        setIsOpen(true);
    }


    return(
        <>
        <main>
            <input type="text" value={firstValue} onChange={e => setFirstValue(e.target.value)} placeholder="Тема"/>
            <br />
            <input type="text" value={secondValue} onChange={e => setSecondValue(e.target.value)} placeholder="Подробно" />
            <br />
            <button onClick={addCard}>Сохранить</button>
        </main>
        <div className="cards-container">
            {cards.map((card , index) => (
                <div className={isDone ? "cardTrue" : "card"} key={index}>
                    <CardForTodoList 
                    firstValue={card.firstValue}
                    secondValue={card.secondValue} />
                    <CheckBox/>
                    <br />
                    <div className="btn">
                    <Edit onEdit={() => onEdit(index)} />
                    {modalIsOpen && currentEditIndex === index && 
                    <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Edit Card Modal"
                  >
                    <input 
                    type="text" 
                    value={firstValue} 
                    onChange={e => setFirstValue(e.target.value)} 
                    placeholder="Тема"/>
                    <br />
                    <input 
                    type="text" 
                    value={secondValue} 
                    onChange={e => setSecondValue(e.target.value)} 
                    placeholder="Подробно" />
                    <button onClick={closeModal}>Сохранить и выйти</button>
                  </Modal>}
                    <br />
                    <Delete onDelete={() => onDelete(index)} />
                    </div>
                    
                </div>
            ))}
        </div>
        
        </>
    );
}
