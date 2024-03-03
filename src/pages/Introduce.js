import styled from "styled-components"

export default function Introduce() {
  return (
    <St.ContentWrapper>
      <St.Text>
        안녕하세요!
      </St.Text>
      <St.Text>
        사용자에게 편리한 서비스를 제공해 세상을 발전시키는 사람이 되고 싶은<br/>
        신입 프론트엔드 개발자 김소은입니다.
      </St.Text>
      <St.Text>
        빨리 배우고', 
        '어디서든 잘적응하고', 
        '커뮤니케이션 잘하고', 
        '꾸준히 학습/성장하는', 
        '문제해결을 잘하는 것', 
        '팀에 잘 적응하는 인재'
      </St.Text>
      <St.Text>
        - 경험을 통해 성장하고 다양한 사람들을 만나는 것을 좋아합니다.<br/>
        - 사용자가 편리함을 느낄 수 있는 서비스를 개발하고 싶습니다.
      </St.Text>
    </St.ContentWrapper>
  )
}

const St = {
  ContentWrapper: styled.div`
  `,
  Text: styled.div`
    @media (max-width: 700px) {
      font-size: 15px;
    }
  `
}