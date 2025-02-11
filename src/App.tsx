import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/question');
  };
  return (
    <div className="hero">
      <h1 style={{ padding: '100px' }}>My dear Princess?</h1>

      <button onClick={handleOnClick}>Yes ?</button>
    </div>
  );
}

export default App;
