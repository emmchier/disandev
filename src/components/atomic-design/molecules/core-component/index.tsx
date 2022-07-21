import React, { FC } from 'react';
import Icon from '../../atoms/icon';
import Line from '../../atoms/line';

import Spark from '../../atoms/spark';
import SparkList from '../../atoms/spark/spark-list';
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

const Core: FC = () => {
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

export default Core;
