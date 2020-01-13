import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import { Row, Col } from 'react-flexbox-grid';

const WrapRow = styled.div`
  padding-top: 10px;
  padding-bottom: 0;
  padding-left: 10px;
  padding-right: 10px;
  
`;
const WrapIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.25em;
  font-size: 1.25em;
  line-height: 1.5em;
`;

const TextSidebar = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-family: 'Oswald', Helvetica, sans-serif;
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.5em;
`;

const Subtitle = styled.div`
  font-weight: 300;
  opacity: 0.8;
  margin: 0 0 4px;
  font-size: 1em;
  line-height: 1.5em;
`;

const Text = styled.div`
  font-size: 0.875em;
  line-height: 1.5em;
  margin: 0 0 10px;
`;


// eslint-disable-next-line react/prop-types
const RowSidebar = ({ children, icon, line }) => {
  console.log(line);
  return (
    <WrapRow>
      <Row>
        <Col xs={12} md={3}>
          <WrapIcon>
            {icon}
          </WrapIcon>
        </Col>
        <Col xs={12} md={9} style={{ borderBottom: `1px solid ${line ? '#4783c2' : 'transparent'}` }}>
          <TextSidebar>
            {children}
          </TextSidebar>
        </Col>
      </Row>
    </WrapRow>
  );
};

RowSidebar.propTypes = {
  icon: PropTypes.node,
  line: PropTypes.bool,
};

RowSidebar.defaultProps = {
  icon: null,
  line: true,
};

RowSidebar.Title = Title;
RowSidebar.Subtitle = Subtitle;
RowSidebar.Text = Text;


export default RowSidebar;
