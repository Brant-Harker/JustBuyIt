import FallingLetters from './FallingLetters/FallingLetters';

const Puzzle3 = ({ setCompleted }) => {
    document.querySelector('body').style.backgroundColor = 'black';
    return (
      <>
        <h1>Puzzle3</h1>
        <FallingLetters/>
      </>
    ) 
  };
  
  export default Puzzle3;