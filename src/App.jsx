import Header from "./components/Header";
import Form from "./components/Form";
import ListaTareas from "./components/ListaTareas";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form tarea={tarea} tareas={tareas} setTareas={setTareas} />
        <ListaTareas tareas={tareas} setTarea={setTarea} />
      </div>
    </div>
  );
}

export default App;
