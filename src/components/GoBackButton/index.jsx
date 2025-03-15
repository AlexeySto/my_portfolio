import { useNavigate } from 'react-router-dom';
import "./style.css";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
     <button className='back-button' onClick={() => navigate(-1)}>Назад</button>
  );
}

export default GoBackButton;