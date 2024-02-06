import Card from "./components/Card";
import './assets/css/style.css';


function App() {
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
       <Card word={'Rose'} wordTransled={'Pink'} image={'https://img.freepik.com/photos-gratuite/flou-abstrait-fond-ton-chaud-pastel-belle-couleur-rose-peche-ciel-pour-conception-tant-que-bannerslid_1258-88720.jpg'} />
        </section>
      <button className="add-flashcard-button">
        <i className="fas fa-plus"></i>
        Créer une carte
      </button>
    </main>
    </>
  )
}

export default App
