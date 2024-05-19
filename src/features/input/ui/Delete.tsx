interface DeleteProps {
    onDelete: () => void;
}

export default function Delete({ onDelete }: DeleteProps) {
    return (
        <button onClick={onDelete}>Удалить</button>
    );
}
