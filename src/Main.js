import styled from "styled-components";
import Introduce from "./pages/Introduce";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
import Project from "./pages/Project";

export default function Main() {
  return (
    <div>
      <St.BoxWrapper>
        <St.TitleWrapper>
          <St.Title>Introduce</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Introduce />
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.TitleWrapper>
          <St.Title>Skill</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Skill/>
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.TitleWrapper>
          <St.Title>Experience</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Experience />
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.TitleWrapper>
          <St.Title>Project</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Project/>
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.TitleWrapper> 
          <St.Title>Education</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Introduce />
        </St.Content>
      </St.BoxWrapper>

      <St.BoxWrapper>
        <St.TitleWrapper> 
          <St.Title>Activity</St.Title>
        </St.TitleWrapper>
        <St.Content>
          <Introduce />
        </St.Content>
      </St.BoxWrapper>
    </div>
  );
}

const St = {
  BoxWrapper: styled.div`
    display: flex;
    margin: 50px;

    @media (max-width: 890px) {
      flex-direction: column;
      justify-content: center;
      margin: 50px 0;
    }
  `,
  TitleWrapper: styled.div`
    @media (max-width: 890px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  Title: styled.h2`
    width: 200px;
    font-size: 35px;
    margin: 0;

    @media (max-width: 890px) {
      text-align: center;
    }

    @media (max-width: 550px) {
      font-size: 25px;
    }
  `,
  Content: styled.div`
    flex: 1;
    padding-top: 10px;
    padding-left: 50px;

    @media (max-width: 890px) {
      margin-top: 30px;
      padding: 0;
    }
  `,
};
