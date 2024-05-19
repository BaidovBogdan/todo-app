interface EditProps {
    onEdit: () => void;
}

export default function Edit({ onEdit }: EditProps) {
    return (
        <button onClick={onEdit}>Изменить</button>
    );
}
