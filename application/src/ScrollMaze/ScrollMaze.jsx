import './ScrollMaze.css'

function ScrollMaze() {

  return (
    <div className='maze'>
      
      <div className='container container-row'>

        <div className='spacer-right'/>

        <div className='container container-column'>
          <div className='spacer-bottom'/>

          <div className='container container-row'>
            <div className='spacer-right'></div>
          </div>

          <div className='spacer-bottom'/>

          <div className='container container-row'>
            <div className='spacer-right'/>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default ScrollMaze;