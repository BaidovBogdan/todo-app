import { useState } from "react"


export default function CheckBox() {
    const [isDone , setIsDone] = useState<boolean>(false);

    const changeDone = () => {
        setIsDone(prev => !prev)
    }

    return(
        <input type="checkbox" checked={isDone} onChange={changeDone} />
    )
};
