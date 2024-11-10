import ScrollMaze from './ScrollMaze/ScrollMaze'
import './Puzzles.css'

const Puzzle2 = ({ setCompleted }) => {
  return (
    <>
      <h2 className="puzzle-headers">Are you sure you want to cancel?</h2>
      <ScrollMaze setCompleted={setCompleted}/>;
    </>
  );
};

export default Puzzle2;
