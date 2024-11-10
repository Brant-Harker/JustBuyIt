import { useEffect } from 'react';
import './ScrollMaze.css';
import onlineShopping from '../../assets/Online Shopping.png';
import breakFromAds from '../../assets/Spotify.jpg';
import meeting from '../../assets/meeting.png';
import war from '../../assets/war.jpg';
import best from '../../assets/Best Buy.png';
import juice from '../../assets/juice.jpg';
import cruise from '../../assets/CRUISE_SCAM.jpg';
import singles from '../../assets/singles.png';
import celebrate from '../../assets/celebrate.png';
import fantasy from '../../assets/fantasy.png';
import brilliant from '../../assets/brilliant.png';
import frosty from '../../assets/Frosty.jpg';
import bike from '../../assets/bike.png';
import lego from '../../assets/lego.avif';
import xeno from '../../assets/xeno.jpg';
import blockbuster from '../../assets/blockbuster.jpg';

function ScrollMaze ( props ) {

  useEffect(() => {
    const middleCols = document.querySelectorAll('div.middle-col');
    const bigScroll = document.querySelector('#bigScroll');
    const startText = document.querySelector('p.text');

    bigScroll.scrollLeft = startText.offsetLeft - bigScroll.offsetLeft - 100;
    for ( let scroller of middleCols) {
      scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) / 2;
    }
  }, []);

  const onClick = () => {
    props.setCompleted(true);
  }

  return (
    <div className='maze'>
      
      <div id='bigScroll' className='container container-row middle-row'>

        <div id='2' className='container container-column' style={{minWidth: '50vw'}} elevation={24}>

          <img src={war} style={{minHeight: '300%'}}/>
          <div className='spacer-bottom'/>

          <div id='3' className='container container-row'>
            <img src={juice} style={{marginLeft: '15vw'}}/>
            <div className='spacer-right'></div>
            <div id='4' className='container container-column middle-col'>
              <img src={cruise}/>
              <img src={xeno} style={{marginTop: '50vh', marginBottom: '50vh'}}/>
              <img src={singles}/>
            </div>
          </div>

          <div id='6' className='container container-row'>
            <img src={brilliant} style={{marginLeft: '7vw'}}/>
            <img src={blockbuster} style={{marginLeft: '30vw', marginRight: '30vw'}}/>
            <div id='7' className='container container-column middle-col'>
              <button className='cancel'>Cancel!!!!</button>
              <img src={bike} />
              <div className='spacer-bottom' style={{marginBottom: '75vh'}}/>
              <img src={lego} />
              <div className='spacer-bottom' style={{marginBottom: '75vh'}}/>
              <img src={fantasy}/>
            </div>
            <div className='vertical-alignment' style={{marginLeft: '50vw'}}>
              <button className='confirm'>Confirm Purchase!</button>
              <img src={celebrate}/>
            </div>
          </div>
        </div>

        <img src={frosty} style={{minWidth: '30vw', marginLeft: '5vw'}}/>

        <div className='spacer-right'/>
        <img src={best}/>
        <div className='spacer-right'/>
        
        <div className='vertical-alignment'>
          <p className='text'>
            Last chance. Are you sure you want to cancel your purchase?
            Think of the time you will save by just confirming your purchase.
            If you would like to continue with your purchase, select the confirm purchase button!
            If you are sure you would like to cancel your purchase, please find the cancel button.
          </p>
          <img src={meeting} style={{height: '40vh', width: '40vh', marginLeft: '30vw'}}/>
        </div>

        <div className='spacer-right'/>
        <img src={breakFromAds}/>
        <div className='spacer-right'/>

        <div className='vertical-alignment'>
          <button className='confirm' onClick={onClick}>Confirm Purchase!</button>
          <img src={onlineShopping}/>
        </div>

      </div>

    </div>
  )
}

export default ScrollMaze;