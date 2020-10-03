import React, { FunctionComponent as FC } from 'react';
import ReadmeImg from './ReadmeImg';

export interface Props {
  imageSrc: string;
  name: string;
  userLink: string;
}

export const RandomImage: FC<Props> = ({ imageSrc, name, userLink }) => {
  return (
    <ReadmeImg width="855" height="280">
      <div>
        <img src={imageSrc} width="849" height="279" />
        <p>
          Photo by{' '}
          <a
            href={`${userLink}?utm_source=github.com/marcomcnulty&utm_medium=referral`}
          >
            {name}
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=github.com/marcomcnulty&utm_medium=referral">
            Unsplash
          </a>
        </p>
      </div>
    </ReadmeImg>
  );
};
