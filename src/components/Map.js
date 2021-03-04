import styled from 'styled-components';
import { MEDIA_QUERY_LG } from '../constants/style'

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justigy-content: space-between;
  align-items: center;

  ${MEDIA_QUERY_LG} {
    flex-direction: column-reverse;
  }
`;

export const MapWrapper = styled.div`
  width: 70%;
  height: 95%;
  margin: 0 10px;

  ${MEDIA_QUERY_LG} {
    width: 100%;
    height: 80%;
  }
`;

export const GeoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY_LG} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

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

    ${MEDIA_QUERY_LG} {
      width: 50%;
      height: 20%;
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

  ${MEDIA_QUERY_LG} {
    margin: 5px;
  }

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