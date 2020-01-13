import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const BodyProgress = styled.div`
  padding-top: 5px;
`;

const Label = styled.span`
  display: block;
  font-family: 'Oswald', Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1.25em;
  line-height: 1.2em;
  margin-bottom: 10px;
  
`;

const WrapProgressBar = styled.div`
  display: block;
  height: 3px;
  width: 100%;
  background: rgba(0,0,0,.26);
`;

const Progress = styled.div`
  display: block;
  background-color: #ffffff;
  width: ${(p) => p && `${p.progress}%`};
  height: 3px;
`;

const ProgressBar = ({ progress, label }) => {

  return (
    <BodyProgress>
      <Label>{label}</Label>
      <WrapProgressBar>
        <Progress progress={progress} />
      </WrapProgressBar>
    </BodyProgress>
  );
};

ProgressBar.propTypes = {
  progress: PropType.number.isRequired,
  label: PropType.string.isRequired,
};

export default ProgressBar;
