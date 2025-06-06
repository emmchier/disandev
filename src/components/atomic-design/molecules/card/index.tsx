/* eslint-disable @typescript-eslint/camelcase */
import React, { FC } from 'react';
import Image from 'next/image';

import { Heading, SparkList, Text, Button } from '../../atoms';

import {
  TitleContent,
  DescContent,
  CardContent,
  HoverContainer,
  HoverContent,
  ButtonContent,
} from './styles';

interface PropTypes {
  img?: string;
  title?: string;
  description?: string;
  alt?: string;
  type?: string;
  year?: string;
  padding?: string;
  isLower?: boolean;
  width?: number;
  height?: number;
  borderRadius?: boolean;
  boxShadow?: boolean;
  sparks?: boolean;
  isHover?: boolean;
  cap?: string;
  wrapperHeight?: string;
  wrapperWidth?: string;
  imgHeight?: string;
  imgWidth?: string;
}

export const Card: FC<PropTypes> = ({
  img = '',
  title = '',
  description = '',
  alt = '',
  type = '',
  year = '',
  padding = '',
  isLower = true,
  width = '100%',
  height = '100%',
  borderRadius = false,
  boxShadow = false,
  sparks = true,
  isHover = false,
  cap = 'upper',
  wrapperHeight,
  wrapperWidth,
  imgHeight,
  imgWidth,
}) => (
  <CardContent padding={padding} borderRadius={borderRadius} boxShadow={boxShadow}>
    <HoverContainer
      wrapperHeight={wrapperHeight}
      wrapperWidth={wrapperWidth}
      imgHeight={imgHeight}
      imgWidth={imgWidth}
    >
      <span>
        {isHover && (
          <HoverContent>
            <ButtonContent>
              <Button variant="outlined" ariaLabel="button" iconRight={true}>
                Ver más
              </Button>
            </ButtonContent>
          </HoverContent>
        )}
        <Image src={img} alt={alt} width={width} height={height} layout="responsive" priority />
      </span>
    </HoverContainer>
    <TitleContent isLower={isLower}>
      <Heading variant="h4" weight="bold" cap={cap}>
        {title}
      </Heading>
      {sparks && <SparkList num={3} />}
    </TitleContent>
    <DescContent>
      <Text weight={'regular'}>
        {type && type}
        {type && ', '}
        {year && year}
      </Text>
      <Text weight="regular">{description && description}</Text>
    </DescContent>
  </CardContent>
);
