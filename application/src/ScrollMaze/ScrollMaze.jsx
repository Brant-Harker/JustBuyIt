import { useEffect } from 'react';
import './ScrollMaze.css'

function ScrollMaze() {

  

  useEffect(() => {
    // const scroller = document.querySelector("#scroller");
    const middleRows = document.querySelectorAll('div.middle-row');
    const middleCols = document.querySelectorAll('div.middle-col');
    for ( let scroller of middleRows) {
      scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
    }
    for ( let scroller of middleCols) {
      scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) / 2;
    }
  }, []);

  return (
    <div className='maze'>
      
      <div id='1' className='container container-row middle-row'>

        <div id='2' className='container container-column' style={{minWidth: '50vw'}}>
          <div className='spacer-bottom'/>

          <div id='3' className='container container-row'>
            <div className='spacer-right'></div>
            <div id='4' className='container container-column middle-col'>
              <div className='spacer-bottom'/>

              <div id='5' className='container container-row'>
                <div className='spacer-right'/>
              </div>

            </div>
          </div>

          <div className='spacer-bottom'/>

          <div id='6' className='container container-row'>
            <div className='spacer-right'/>
            <div id='7' className='container container-column middle-col'>
              <button className='cancel'>Cancel!!!!</button>
              <div className='spacer-bottom'/>
            </div>
            <div className='spacer-right'/>
            <div id='8' className='container container-column'>
              <div className='spacer-bottom'/>
            </div>
            <div className='spacer-right'/>
            <button className='confirm'>Confirm Purchase!</button>
          </div>
          
        </div>
        <div className='spacer-right'/>
        <p className='text'>
          Last chance. Are you sure you want to cancel your purchase?
          Think of the time you will save by just confirming your purchase.
          If you would like to continue with your purchase, select the confirm purchase button!
          If you are sure you would like to cancel your purchase, please select the cancel button.
        </p>

        <div className='spacer-right'/>

        <button className='confirm'>Confirm Purchase!</button>

      </div>

    </div>
  )
}

export default ScrollMaze;