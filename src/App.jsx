import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);


// import Card from "./components/Card";
import Add from './components/Add';
import './assets/css/style.css';


function App() {
  const handleClick = () => {
    <Add />
  }

  return (
    <>
    <header>
      <h1>Flashcards</h1>
      <div className="header-buttons">
        <a href="#">Connexion</a>
        <a href="#">Inscription</a>
      </div>
    </header>
    <main>
      <section className="flashcards-container">
      </section>
      <button className="add-flashcard-button" onClick={handleClick}>
      <i><FontAwesomeIcon icon="fa-plus" /></i>
        Créer une carte
      </button>
    </main>
    </>
  )
}

export default App
