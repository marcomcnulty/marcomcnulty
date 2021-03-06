import React, { FunctionComponent as FC } from 'react';
import ReadmeImg from './ReadmeImg';

import AWSIcon from './icons/AWSIcon';
import CSSIcon from './icons/CSSIcon';
import DockerIcon from './icons/DockerIcon';
import HtmlIcon from './icons/HtmlIcon';
import JSIcon from './icons/JSIcon';
import NodeIcon from './icons/NodeIcon';
import RailsIcon from './icons/RailsIcon';
import ReactIcon from './icons/ReactIcon';
import RubyIcon from './icons/RubyIcon';
import TSIcon from './icons/TSIcon';
import GraphQLIcon from './icons/GraphQLIcon';

export interface Props {}

export const Tools: FC<Props> = ({}) => {
  return (
    <ReadmeImg width="800" height="212">
      <div id="icon-wrapper">
        <HtmlIcon width="70" height="70" />
        <CSSIcon width="70" height="70" />
        <JSIcon width="70" height="70" />
        <TSIcon width="70" height="70" />
        <ReactIcon width="70" height="70" />
        <NodeIcon width="70" height="70" />
        <RubyIcon width="70" height="70" />
        <RailsIcon width="70" height="70" />
        <DockerIcon width="70" height="70" />
        <AWSIcon width="70" height="70" />
        <GraphQLIcon width="70" height="70" />
      </div>

      <style>
        {`
        #icon-wrapper {
          display: flex;

          flex-wrap: wrap;
        }

        #icon-wrapper svg {
          margin: 12px;
          padding: 8px;
          background: rgb(250, 250, 250);
          box-shadow: 2px 2px 2px rgba(0,0,0,.3);
          border: 1px solid rgba(0,0,0,.01);
          border-radius: 12px;
        }
      `}
      </style>
    </ReadmeImg>
  );
};
