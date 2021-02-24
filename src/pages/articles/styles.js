import styled from 'styled-components';

export const SectionArticleStyle = styled.section`
  padding-top: 9.625rem;
  padding-bottom: 5rem;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.4375rem;
    h1 {
      font-weight: 600;
      font-size: 3.25rem;
      line-height: 1;
      color: #FFFFFF;
    }
    p {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
  }
  .all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: flex-start;
    grid-gap: 24px 33px;
  }
  @media(max-width: 1024px) {
    .all {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media(max-width: 560px) {
    padding-top: 129px;
    padding-bottom: 40px;
    .top {
      flex-direction: column;
      align-items: center;
      h1 {
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 3.375rem;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 0.875rem;
      }
    }
    .all {
      grid-template-columns: 1fr;
    }
  }
`;