import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer className="App-footer">
          This{" "}
          <a href="https://github.com/ChristinaDo/dictionary-project">
            open-sourced
          </a>{" "}
          project is coded with ❤️ by Christina Doneus
        </footer>
      </div>
    </div>
  );
}
