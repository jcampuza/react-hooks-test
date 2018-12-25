import React, { useRef } from 'react';
import { useIntersected } from '../hooks/useIntersection';

export function Intersection() {
  const ref = useRef(null);
  const [isIntersecting] = useIntersected(ref);

  return (
    <div ref={ref}>
      <h4>useIntersected</h4>
      <p>
        This component utilizes a custom hook called <code>useIntersected</code>
        . It will trigger when the component is intersecting the viewport.
      </p>

      <p>Current Intersecting: {isIntersecting ? 'true' : 'false'}</p>

      <small>
        Note you should always see true when viewing this component. To see it
        false you may need to move it out of the viewport, refresh, and then
        check the elements panel of devtools
      </small>
    </div>
  );
}
