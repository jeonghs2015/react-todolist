import './app.css';

function App() {
  const todo = ['장보기', '출근하기'];
  const list = todo.map((dododo) => <li>{dododo}</li>);

  return (
    <div>
      <ul>
        <li>{list}</li>
      </ul>
    </div>
  );
}

export default App;
