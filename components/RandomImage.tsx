import React, { FunctionComponent as FC } from 'react';
import ReadmeImg from './ReadmeImg';

export interface Props {
  imageSrc: string;
}

export const RandomImage: FC<Props> = ({ imageSrc }) => {
  return (
    <ReadmeImg width="855" height="280">
      <img src={imageSrc} width="849" height="279" />
    </ReadmeImg>
  );
};
