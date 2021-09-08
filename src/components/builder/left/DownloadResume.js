import styled from 'styled-components'

const DownloadWrapper = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  box-shadow: 0 -.4rem 1.2rem rgba(0,0,0,.3);
`

const DownloadButton = styled.button`
width: 100%;
font-size: 2.2rem;
font-weight: 400;
padding: 1rem 1rem;
background-color: #5c5c5c;
color: white;
border-radius: 5px;
border: none;
cursor: pointer;
transition: background-color .4s;

:hover {
  background-color:#6c6c6c;
}
`

const DownloadResume = () => (
  <>
    <DownloadWrapper>
      <DownloadButton>Pobierz Twoje CV</DownloadButton>
    </DownloadWrapper>
  </>
)


export default DownloadResume