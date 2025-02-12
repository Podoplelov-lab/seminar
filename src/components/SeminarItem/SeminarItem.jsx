

export default function SeminarItem({ seminar, onDelete, onEdit }) {
    return (
        <li>
            <h2>{seminar.title}</h2>
            <p>{seminar.description}</p>
            <p>Дата: {seminar.date}, Время: {seminar.time}</p>
            <img src={seminar.photo} alt={seminar.title} width="150px" />
            <button onClick={() => onDelete(seminar.id)}>Удалить</button>
            <button onClick={() => onEdit(seminar)}>Редактировать</button>
        </li>
    )
}