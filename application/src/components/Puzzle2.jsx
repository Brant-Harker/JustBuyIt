import ScrollMaze from './ScrollMaze/ScrollMaze'
import './Puzzles.css'

const Puzzle2 = ({ setCompleted }) => {
  document.querySelector('body').style.backgroundColor = '#dcdcdc';
  return (
    <ScrollMaze setCompleted={setCompleted}/>
  );
};

export default Puzzle2;
