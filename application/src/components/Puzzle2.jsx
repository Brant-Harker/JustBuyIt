import ScrollMaze from './ScrollMaze/ScrollMaze'
import './Puzzles.css'

const Puzzle2 = ({ setCompleted, setDisplayPuzzles }) => {
  document.querySelector('body').style.backgroundColor = '#dcdcdc';
  return (
    <ScrollMaze setCompleted={setCompleted} setDisplayPuzzles={setDisplayPuzzles}/>
  );
};

export default Puzzle2;
