import React from 'react';
import '../Roadmap/Roadmap.scss'

import Carousel from '../Carousel/Carousel'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Roadmap2() {
  return (
    <div className="timeline-content" id='roadmap'>
      <p className='roadmap__title'>Roadmap</p>
      <div className='roadmap__description'>
        <p>Our goal is to make a challenge of 10 to 1000 solanas... We created this collection for... Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat <br></br> <br></br>
        </p>
        <Carousel></Carousel>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //contentArrowStyle={{ borderRight: '7px solid  rgb(252, 163, 17)' }}
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">PHASE 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer ac elementum orci. Quisque lacus ipsum, ultricies imperdiet aliquet ut, pretium in ante.
            Etiam scelerisque placerat lorem, sed commodo nunc dictum in. Etiam tempor leo sed lorem pulvinar, <br></br> <br></br>
            eu viverra magna tristique. In ut lacus a orci accumsan congue bibendum sed purus.
            Nam aliquet dui sed varius blandit. Nunc mauris libero, rutrum sit amet feugiat eget,

          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">PHASE 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer ac elementum orci. Quisque lacus ipsum, ultricies imperdiet aliquet ut, pretium in ante.
            Etiam scelerisque placerat lorem, sed commodo nunc dictum in. Etiam tempor leo sed lorem pulvinar, <br></br> <br></br>
            eu viverra magna tristique. In ut lacus a orci accumsan congue bibendum sed purus.
            Nam aliquet dui sed varius blandit. Nunc mauris libero, rutrum sit amet feugiat eget,
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">PHASE 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer ac elementum orci. Quisque lacus ipsum, ultricies imperdiet aliquet ut, pretium in ante.
            Etiam scelerisque placerat lorem, sed commodo nunc dictum in. Etiam tempor leo sed lorem pulvinar, <br></br> <br></br>
            eu viverra magna tristique. In ut lacus a orci accumsan congue bibendum sed purus.
            Nam aliquet dui sed varius blandit. Nunc mauris libero, rutrum sit amet feugiat eget,
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">PHASE 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer ac elementum orci. Quisque lacus ipsum, ultricies imperdiet aliquet ut, pretium in ante.
            Etiam scelerisque placerat lorem, sed commodo nunc dictum in. Etiam tempor leo sed lorem pulvinar, <br></br> <br></br>
            eu viverra magna tristique. In ut lacus a orci accumsan congue bibendum sed purus.
            Nam aliquet dui sed varius blandit. Nunc mauris libero, rutrum sit amet feugiat eget,
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}

export default Roadmap2;