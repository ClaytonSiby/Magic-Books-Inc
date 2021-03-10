import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../assets/App.css';

function App() {
  return (
    <div className="App">
      <BooksForm />
      <BooksList />

    </div>
  );
}

export default App;
