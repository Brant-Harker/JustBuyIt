import MovingCheckbox from './MovingCheckbox';

const Puzzle1 = ({ setCompleted }) => {
  document.querySelector('body').style.backgroundColor = '#ffffff';
  return (
    <MovingCheckbox setCompleted={setCompleted}/>
  ) 
};

export default Puzzle1;
