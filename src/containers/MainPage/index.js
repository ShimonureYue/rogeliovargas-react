import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid'; 

import Main from './Main';
import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <Grid>
      <Row style={{paddingBottom: '50px'}}>
        <Col xs={12} md={4}>
          <Sidebar />
        </Col>
        <Col xs={12} md={8}>
          <Main />
        </Col>
      </Row>
    </Grid>
  );
};

export default MainPage;
