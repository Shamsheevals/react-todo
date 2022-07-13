const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setStatus,
  status,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHadler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form action="">
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHadler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">Все</option>
          <option value="completed">Выполнено</option>
          <option value="uncompleted">Не выполнено</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
