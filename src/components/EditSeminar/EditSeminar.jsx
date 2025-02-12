import { useActionState } from "react";

export default function EditSeminar({ seminar, onCancel, onSubmit }) {
    const { id, title, description, ...data } = seminar

    const [error, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            //   const error = await updateName(formData.get("name"));
            //   if (error) {
            //     return error;
            //   }
            //   redirect("/path");
            const title = formData.get('title')
            const description = formData.get('description')
            console.log(title, description)
            onSubmit(id, { ...data, title, description }, onCancel)
            return null;
        },
        null,
    );

    return (
        <form action={submitAction}>
            <h2>Редактирование семинара</h2>
            <input
                type="text"
                name="title"
                defaultValue={title}
                // onChange={handleTitleChange}
                placeholder="Название"
            />
            <textarea
                name="description"
                defaultValue={description}
                // onChange={handleDescriptionChange}
                placeholder="Описание"
            />
            <button type="submit">Сохранить</button>
            <button className="cancel" onClick={onCancel}>Закрыть</button>
        </form>
    )
}