import { useEffect } from 'react';
import './ScrollMaze.css';
import running1 from '../../assets/Humaaans - Standing 1.png';
import running2 from '../../assets/Humaaans - Standing 2.png';
import running3 from '../../assets/Humaaans - Standing 3.png';
import onlineShopping from '../../assets/Online Shopping.png';
import breakFromAds from '../../assets/Spotify.jpg';
import meeting from '../../assets/meeting.png';
import war from '../../assets/war.jpg';
import best from '../../assets/Best Buy.png';
import sitting from '../../assets/sitting.png';
import cruise from '../../assets/CRUISE_SCAM.jpg';
import party from '../../assets/party.png';
import celebrate from '../../assets/celebrate.png';
import up from '../../assets/up.png';

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

        <div id='2' className='container container-column' style={{minWidth: '50vw'}} elevation={24}>
          <img src={war} style={{minHeight: '300%'}}/>
          <div className='spacer-bottom'/>

          <div id='3' className='container container-row'>
            <img src={sitting} style={{marginLeft: '15vw'}}/>
            <div className='spacer-right'></div>
            <div id='4' className='container container-column middle-col'>
              <img src={cruise}/>
              <div className='spacer-bottom'/>
              <img src={party}/>
            </div>
          </div>

          <div className='spacer-bottom'/>

          <div id='6' className='container container-row'>
            <div className='spacer-right'/>
            <div id='7' className='container container-column middle-col'>
              <button className='cancel'>Cancel!!!!</button>
              <div className='spacer-bottom'/>
              <img src={up}/>
            </div>
            <div className='spacer-right'/>
            <div id='8' className='container container-column'>
              <div className='spacer-bottom'/>
              <img src={meeting}/>
            </div>
            <div className='spacer-right'/>
            <div className='confirm-button-wrapper'>
              <button className='confirm'>Confirm Purchase!</button>
              <img src={celebrate}/>
            </div>
          </div>
          
        </div>
        <div className='spacer-right'/>
        <img src={best}/>
        <div className='spacer-right'/>
        <p className='text'>
          Last chance. Are you sure you want to cancel your purchase?
          Think of the time you will save by just confirming your purchase.
          If you would like to continue with your purchase, select the confirm purchase button!
          If you are sure you would like to cancel your purchase, please select the cancel button.
        </p>

        <div className='spacer-right'/>
        <img src={running2}/>
        <div className='spacer-right'/>
        <img src={running3}/>
        <div className='spacer-right'/>
        <img src={running1}/>
        <div className='spacer-right'/>
        <img src={breakFromAds}/>
        <div className='spacer-right'/>

        <div className='confirm-button-wrapper'>
          <button className='confirm'>Confirm Purchase!</button>
          <img src={onlineShopping}/>
        </div>

      </div>

    </div>
  )
}

export default ScrollMaze;