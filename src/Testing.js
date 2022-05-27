import React from "react";
import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper>
      <h3>Hello world</h3>
      <p>Hello people</p>
      <div className="article">
        <p>this is article</p>
        <p>Hello</p>
      </div>
      <button>Click me</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: blue;
    }
  }
`;

export default Testing;
