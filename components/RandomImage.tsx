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
    <ReadmeImg width="902" height="500">
      <div>
        <img src={imageSrc} width="902" />
        <Text size="small" family="mono" color="grey" alignment="right">
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
