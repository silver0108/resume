import styled from "styled-components"

export default function Project() {
  return (
    <St.ProjectWrapper>
      <St.ProjectBox>
        <St.ProjectTitleWrapper>
          <St.Title>[졸업프로젝트 캡스톤디자인] 가상안경피팅 서비스 GrassFit</St.Title>
          <St.Period>2022.12 ~ 2023.02</St.Period>
        </St.ProjectTitleWrapper>
        <St.Summary>
          안경을 가상 피팅 해보고 얼굴형을 분석하여 본인에게 잘 어울리는 안경을 추천받을 수 있는 서비스
        </St.Summary>
        <St.ContentWrapper>
          <St.Subheading>Skill</St.Subheading>
          <St.DetailSkillWrapper>
            <St.DetailSkill>React</St.DetailSkill>
            <St.DetailSkill>Javascript</St.DetailSkill>
            <St.DetailSkill>Django</St.DetailSkill>
            <St.DetailSkill>Docker</St.DetailSkill>
            <St.DetailSkill>Git & Github</St.DetailSkill>
          </St.DetailSkillWrapper>
        </St.ContentWrapper>

        <St.ContentWrapper>
          <St.Subheading>Front-End</St.Subheading>
          <St.DetailRoleWrapper>
            <St.DetailRole>- 홈 /안경 가상 피팅 웹 캠 / 얼굴형 분석 웹 캠 및 결과 /스타일별 상품 목록 /상품 상세 /프로필 /상품 찜 목록</St.DetailRole>
            <St.DetailRole> - 찜 기능 상태 관리를 위한 Redux 사용</St.DetailRole>
          </St.DetailRoleWrapper>
        </St.ContentWrapper>
      </St.ProjectBox>


    </St.ProjectWrapper>
  )
}

const St = {
  ProjectWrapper: styled.div`
    
  `,
  ProjectBox: styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid silver;
    margin-bottom: 20px;
  `,
  ProjectTitleWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
    }
  `,
  Title: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  Period: styled.div`
    @media (max-width: 700px) {
      font-size: 13px;
      margin: 10px;
    }
  `,
  
  Summary: styled.div`
    margin: 10px 0;
  `,
  ContentWrapper: styled.div`
    display: flex;
    margin: 20px 0;
  `,
  Subheading: styled.div`
    width: 120px;
    font-weight: bold;
  `,
  DetailSkillWrapper: styled.div`
    flex: 1;
    display: flex;
  `,
  DetailSkill: styled.div`
    padding: 5px 10px;
    margin-right: 3px;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-size: 12px;
  `,
  DetailRoleWrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  DetailRole: styled.div`
  `,
}