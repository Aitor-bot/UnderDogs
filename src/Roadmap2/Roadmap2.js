import React from 'react';
import '../Roadmap2/Roadmap2.scss'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Roadmap2() {
  return (
    <div className="timeline-content" id='roadmap'>
      <p className='roadmap__title'>The UnderDogs roadmap</p>
      <div className='roadmap__description'>
        <p>Something here? Maybe we can put a carousel with some sneak peaks of the project and have it change automatically. Scroll down to see the roadmap </p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //contentArrowStyle={{ borderRight: '7px solid  rgb(252, 163, 17)' }}
          iconStyle={{ background: 'rgb(218, 23, 227)', color: '#fff' }}

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
          iconStyle={{ background: 'rgb(218, 23, 227)', color: '#fff' }}
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
          iconStyle={{ background: 'rgb(218, 23, 227)', color: '#fff' }}
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
          iconStyle={{ background: 'rgb(218, 23, 227)', color: '#fff' }}
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

    </div>
  );
}

export default Roadmap2;