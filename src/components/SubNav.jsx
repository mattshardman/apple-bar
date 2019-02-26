import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import withData from '../lib/withData';

const SubNavWrapper = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    background: rgba(242,242,242,0.7);
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

const ProductWrapper = styled.div`
    width: 980px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 22px;
    animation-name: slide;
    animation-iteration-count: 1;
    animation-duration: 1s;

    @keyframes slide {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

function SubNav({ match, data }) {
  const { id } = match.params;
  return (
    <SubNavWrapper>
      <ProductWrapper>
        {data[id].map(link => (
          <Product>
            <img
              src={link.image}
              alt=""
              height={link.size}
            />
            <span style={{ fontSize: 12 }}>{link.label}</span>
          </Product>
        ))}
      </ProductWrapper>
    </SubNavWrapper>
  );
}

SubNav.propTypes = {
  match: PT.shape().isRequired,
  data: PT.shape().isRequired,
};

export default withData(SubNav);
