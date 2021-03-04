import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justigy-content: space-between;
`;

export const MapWrapper = styled.div`
  width: 70vw;
  height: 100vh;
  margin-right: 10px;
`;

export const GeoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justigy-content: center;

  textarea {
    width: 25vw;
    height: 70vh;
    border: 2px solid #eeeeee;
    border-radius: 4px;
    padding: 10px;
    word-wrap:break-word;
  
    &:focus {
      outline: none;
    }
  }
`

export const GetButton = styled.button`
  margin: 10px;
  border: none;
  padding: 10px;
  cursor: pointer;
  background: #bae0c2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: .2s ease-in all;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #9dd3a8;
  }
`

export const ConfirmButton = styled(GetButton)`
background: #E89898;

&:hover {
  background: #D74B4B;
}
`