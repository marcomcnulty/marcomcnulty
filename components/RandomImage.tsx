import React, { FunctionComponent as FC } from 'react';
import ReadmeImg from './ReadmeImg';
import Text from './Text';

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
        <Text size="small" family="mono" color="grey">
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
        </Text>
      </div>
    </ReadmeImg>
  );
};
