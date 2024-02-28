import styled from "styled-components";
import Introduce from "./pages/Introduce";
import Experience from "./pages/Experience";

export default function Main() {
  return (
    <div>
      <St.BoxWrapper>
        <St.Title>Introduce</St.Title>
        <St.Content>
          <Introduce />
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.Title>Experience</St.Title>
        <St.Content>
          <Experience />
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.Title>Introduce</St.Title>
        <St.Content>
          <Introduce />
        </St.Content>
      </St.BoxWrapper>

      
      
    </div>
  )
}

const St = {
  BoxWrapper: styled.div`
    display: flex;
    margin: 50px 50px 100px 50px;

    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  Title: styled.h2`
    width: 200px;
    font-size: 35px;
    margin: 0;

    @media (max-width: 780px) {
      font-size: 25px;
      margin-bottom: 25px;
      text-align: center;
    }
  `,
  Content: styled.div`
    flex: 1;
    padding-left: 50px;

    @media (max-width: 780px) {
      padding: 0;
    }
  `
}