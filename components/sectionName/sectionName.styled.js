import styled from 'styled-components';

export const Text = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
    position: fixed;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-size: 7rem;
    font-weight: 600;
    top: 50%;
    left: 0;
    left: ${({ active }) => (active ? '0%' : '-100%')};
    transform: translateY(-50%);
    transition: left 0.3s ease-in-out;
    padding-left: 10px;
    -webkit-text-stroke: 1px ${({ theme }) => theme.background};
    pointer-events: none;
    color: transparent;
    z-index: 2;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: ${({ theme }) => theme.accent};
    }
  }
`;
