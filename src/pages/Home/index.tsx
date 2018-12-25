import * as React from 'react';
import { Content } from '../elements';
import { CounterUnstated } from '../../components/CounterUnstated';
import { CounterHook } from '../../components/CounterHook';
import { SynchronizedCounter } from '../../components/SynchronizedCounter';
import { Intersection } from '../../components/Intersection';
import { CurrentDateTime } from '../../components/CurrentDateTime';

export function Home() {
  return (
    <Content>
      <p>
        This is a boilerplate for <code>create-react-app</code> projects. It
        also serves as a personal reference point for some of the features I
        like to use. The source code includes examples of using Hooks, Unstated,
        and other features with TypeScript.
      </p>

      <p>The following libraries are utilized.</p>
      <ul>
        <li>
          <code>TypeScript</code> for static typing.
        </li>
        <li>
          <code>React-Router</code> for routing.
        </li>
        <li>
          <code>Unstated</code> for simple State Management.
        </li>
        <li>
          <code>Styled-Components</code> for styling.
        </li>
      </ul>

      <p>
        Following are some examples of code working with the different pieces of
        the app. (And mostly just me tinkering around)
      </p>

      <h3>Hooks</h3>
      <CounterHook />

      <hr />
      <SynchronizedCounter />

      <hr />
      <Intersection />

      <hr />
      <CurrentDateTime />
    </Content>
  );
}
