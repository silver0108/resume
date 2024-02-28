import styled from "styled-components"

export default function Experience() {
  return (
    <St.ContentWrapper>
      <St.ContentBox>
        <St.CompanyWrapper>
          <St.CompanyName>벡터코리아아이티</St.CompanyName>
          <St.Period>2022.12 ~ 2023.02</St.Period>
        </St.CompanyWrapper>
        <St.Role>인턴&nbsp;&nbsp;●&nbsp;&nbsp;코드테스팅 솔루션</St.Role>
        <St.Work>- SW 검증 프로세스 학습 및 개발</St.Work>
      </St.ContentBox>

      <St.ContentBox>
        <St.CompanyWrapper>
          <St.CompanyName>라온시큐어</St.CompanyName>
          <St.Period>2022.02 ~ 2022.07</St.Period>
        </St.CompanyWrapper>
        <St.Role>인턴&nbsp;&nbsp;●&nbsp;&nbsp;QA</St.Role>
        <St.Work>
          - 신원 인증 어플, NFT 거래 사이트, 보안키패드 제품 통합 테스트<br/>
          - 테스트케이스 작성<br />
          - 이슈 관리
        </St.Work>
      </St.ContentBox>
    </St.ContentWrapper>
  )
}

const St = {
  ContentWrapper: styled.div`
    
  `,
  ContentBox: styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid silver;
  `,
  CompanyWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    margin-top: 20px
  `,
  CompanyName: styled.div`
    font-size: 20px;
    font-weight: bold;
  `,
  Period: styled.div`
  `,
  Role: styled.div`
    font-size: 14px;
  `,
  Work: styled.div`
    margin: 20px 0;
  `
}