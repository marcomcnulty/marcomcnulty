import React, { FunctionComponent as FC } from 'react';
import ReadmeImg from './ReadmeImg';

export interface Props {
  imageUrl: string;
}

export const RandomImage: FC<Props> = ({ imageUrl }) => {
  return (
    <ReadmeImg width="855" height="280">
      <img src={imageUrl} width="849" height="279" />
    </ReadmeImg>
  );
};
