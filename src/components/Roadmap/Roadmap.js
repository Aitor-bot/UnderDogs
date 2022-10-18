import React from 'react';
import '../Roadmap/Roadmap.scss'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
} from '@merc/react-timeline';

function Roadmap() {
  return (
    <div className='roadmap__container'>
      <Timeline>
        <Events>
          
          <TextEvent date="November" text="ibus et magnis dis pa vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, 
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
        ibus et magnis dis pa vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, 
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. " />

          <ImageEvent
            date="November"
            text="Lorem Ipsum..."
            src="https://cdn.discordapp.com/attachments/957969651646730290/1029106160223137902/unknown.png"
            alt="jellyfish swimming"
          >
            <div>
              <UrlButton href="https://magiceden.io/" target="_blank">
                Link to ...
              </UrlButton>
            </div>
          </ImageEvent>

          <TextEvent date="Lorem ipsum" text="ibus et magnis dis pa vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, 
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. " />

          <ImageEvent
            date="Lorem Ipsum"
            text="Lorem Ipsum..."
            src="https://cdn.discordapp.com/attachments/957969651646730290/1029106160223137902/unknown.png"
            alt="jellyfish swimming"
          >
            <div>
              <UrlButton href="https://magiceden.io/" target="_blank">
                Link to ...
              </UrlButton>
            </div>
          </ImageEvent>
          <TextEvent date="Lorem ipsum" text="ibus et magnis dis pa vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, 
        porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. " />
        </Events>
      </Timeline>
    </div>
  );
}

export default Roadmap;