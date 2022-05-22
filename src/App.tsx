import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

// let name: string;
// let age: number | string;
// let alive: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName: (name: string) => never;

// function printName(name: string) {
//   console.log(name);
// }

// printName('Piyush');

// interface Person  extends X {
//   name: string;
//   age?: number | string;
// };
// //* adding question mark to key makes key optional

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// let person1: Person = {
//   name: 'Dylan',
//   age: 29,
// };

// let person2: Person = {
//   name: 'Leah',
//   age: 'twenty-four',
// };

// let lotsOfPeople: Person[];

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
