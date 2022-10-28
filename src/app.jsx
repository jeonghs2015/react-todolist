import './app.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  const todo = ['장보기', '출근하기'];
  const list = todo.map((dododo) => <li>{dododo}</li>);

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
