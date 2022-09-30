import React, { FC } from 'react';

import { Icon, Line, Spark, SparkList } from '../../atoms';

import {
  Atom,
  AtomContent,
  Content,
  Lines,
  MainCore,
  Particles,
  Ring,
  Shapes,
  ShapesContent,
  Textures,
  ThreeParticles,
} from './styles';

export const Core: FC = () => {
  return (
    <Content>
      <AtomContent>
        <Atom>
          <Ring>
            <Spark color="primary" size={1} />
          </Ring>
          <MainCore>
            <Spark color="primary" size={1} />
          </MainCore>
        </Atom>
      </AtomContent>
      <Shapes>
        <ShapesContent>
          <Particles>
            <SparkList num={5} display="horizontal" />
          </Particles>
          <Lines>
            <Line />
            <Line />
          </Lines>
          <ThreeParticles>
            <SparkList num={3} display="horizontal" />
            <SparkList num={3} display="horizontal" />
          </ThreeParticles>
        </ShapesContent>
      </Shapes>
      <Textures>
        <Icon ariaLabel="Dos texture" icon="texture" />
      </Textures>
    </Content>
  );
};
