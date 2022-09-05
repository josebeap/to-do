import Header from "./components/Header";
import Form from "./components/Form";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form />
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
