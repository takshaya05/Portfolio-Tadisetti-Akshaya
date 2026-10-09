import AuthGate from "./components/AuthGate";
import Portfolio from "./Portfolio";
import "./styles/authGate.css";

function App() {
  return (
    <AuthGate>
      <Portfolio />
    </AuthGate>
  );
}

export default App;