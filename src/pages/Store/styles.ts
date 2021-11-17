import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem;
`

export const ProductList = styled.ul`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 0.5rem;
    border-width: 0.1rem;
    border-style: solid;
    border-color: var(--white);
    padding: 1.5rem;

    transition-duration: 0.4s;

    &:hover{
      border-color: var(--blue);
    }

    img {
      align-self: center;
      max-width: 200px;
      max-height: 160px;
    }

    > strong {
      font-size: 1rem;
      line-height: 1.5rem;
      color: var(--shape-text);
      margin-top: 2rem;
    }

    > h6 {
      font-size: 0.8rem;
      line-height: 1.5rem;
      color: var(--shape-light);
      margin-top: 2rem;
    }

    > span {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--shape-dark);
      margin: 1rem 0 2rem;
      bottom: 0;
      position: sticky;
    }

    button {
      font-size: 0.9rem;
      color: var(--blue);
      background: #ffce53;;
      border: 0;
      border-radius: 0.25rem;
      overflow: visible;
      margin-top: auto;

      display: flex;
      align-items: center;

      transition: background 0.2s;
      
      div {
        display: flex;
        align-items: center;
        padding: 0.9rem;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;