import { useEffect, useState } from 'react';

/**
 * A react hook that will notify/update a state value when the passed in ref has intersected
 * TODO: find out how to create the ref here and pass to the component. (Already can, but TypeScript complains)
 */
export function useIntersected(
  ref: React.RefObject<HTMLElement>
): [boolean, IntersectionObserver] {
  // Setup state for intersecting
  const [intersected, setIntersected] = useState(false);

  // Create observer to trigger callback
  const observer = new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) {
      setIntersected(true);
      observer.disconnect();
    }
  });

  // Setup an effect to observe the ref when it has a current property
  useEffect(
    () => {
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    },
    [ref]
  );

  // return intersected state, and the observer instance in case it's needed
  return [intersected, observer];
}
