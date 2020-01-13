import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import RowSidearb from './RowSidebar';
import ProgressBar from '../../components/ProgressBar';


const Img = styled.img`
  width: 100%;
`;

const WrapSidebar = styled.div`
  width: 100%;
  background-color: #5da4d9;
  color: #ffffff;
  padding-bottom: 30px;
  -webkit-box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);
  -moz-box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);
  box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);
`;

const TitleBlock = styled.div`
  position: absolute;
  bottom: 1.75em;
  left: 30px;
  color: #ececec;
`;

const Name = styled.div`
  font-size: 2em;
  font-weight: 700;
  text-shadow: 1px 1px 1px rgba(0,0,0,1);
  line-height: 1.1em;
`;

const Headline = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  text-shadow: 1px 1px 1px rgba(0,0,0,1);
`;

const Sidebar = () => {
  return (
    <WrapSidebar>
      <Row>
        <Col xs={12} style={{ position: 'relative' }}>
          <Img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Background Computer"
          />
          <TitleBlock>
            <Name>Rogelio Vargas Marquez</Name>
            <Headline>Software Engineer</Headline>
          </TitleBlock>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RowSidearb icon={<FontAwesomeIcon icon={faUser} size="lg" />}>
            <RowSidearb.Text>
              Soy Ingeniero de software Full Stack enfocado principalmente por el Desarrollo Web.
              Me gusta crear soluciones que aporten un gran valor de negocio en el ambiente donde me desempeñe profesionalmente.
              Soy una persona responsable y entusiasta que se enfocada en resultados, dando lo mejor en cada actividad que realizo
            </RowSidearb.Text>
          </RowSidearb>
          <RowSidearb icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}>
            <RowSidearb.Title>rogelio.vargas.marquez@gmail.com</RowSidearb.Title>
            <RowSidearb.Subtitle>Profesional</RowSidearb.Subtitle>
            <RowSidearb.Text>
              Soy Ingeniero de software Full Stack enfocado principalmente por el Desarrollo Web.
              Me gusta crear soluciones que aporten un gran valor de negocio en el ambiente donde me desempeñe profesionalmente.
              Soy una persona responsable y entusiasta que se enfocada en resultados, dando lo mejor en cada actividad que realizo
            </RowSidearb.Text>
          </RowSidearb>

          <RowSidearb icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}>
            <RowSidearb.Title>rogelio.vargas.marquez@gmail.com</RowSidearb.Title>
            <RowSidearb.Subtitle>Profesional</RowSidearb.Subtitle>
            <RowSidearb.Text>
              Soy Ingeniero de software Full Stack enfocado principalmente por el Desarrollo Web.
              Me gusta crear soluciones que aporten un gran valor de negocio en el ambiente donde me desempeñe profesionalmente.
              Soy una persona responsable y entusiasta que se enfocada en resultados, dando lo mejor en cada actividad que realizo
            </RowSidearb.Text>
          </RowSidearb>

          <RowSidearb line={false} icon={<FontAwesomeIcon icon={faEnvelope} size="lg" />}>
            <RowSidearb.Title>rogelio.vargas.marquez@gmail.com</RowSidearb.Title>
            <RowSidearb.Subtitle>Profesional</RowSidearb.Subtitle>
            <RowSidearb.Text>
              <ProgressBar label="PHP" progress={75} />
            </RowSidearb.Text>
            <RowSidearb.Text>
              <ProgressBar label="Java" progress={25} />
            </RowSidearb.Text>
            <RowSidearb.Text>
              <ProgressBar label="Javascript" progress={45} />
            </RowSidearb.Text>
          </RowSidearb>
        </Col>
      </Row>
    </WrapSidebar>
  );
};

export default Sidebar;
