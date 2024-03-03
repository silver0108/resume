import styled from "styled-components"

export default function Skill() {
  return (
    <St.SkillWrapper>
      <div>
        <St.SkillBox>
          <St.MajorSkill>React</St.MajorSkill>
          <St.MajorSkill>Javascript</St.MajorSkill>
          <St.MajorSkill>Typescript</St.MajorSkill>
        </St.SkillBox>
        <St.SkillBox>
          <St.ExtraSkill>Next.js</St.ExtraSkill>
          <St.ExtraSkill>Html</St.ExtraSkill>
          <St.ExtraSkill>Css</St.ExtraSkill>
        </St.SkillBox>
      </div>
      <div>
        <St.SkillBox></St.SkillBox>
        <St.SkillBox></St.SkillBox>
      </div>
    </St.SkillWrapper>
  )
}

const St = {
  SkillWrapper: styled.div`
  `,
  SkillBox: styled.div`
    display: flex;
    margin-bottom: 5px;
  `,
  MajorSkill: styled.div`
    padding: 5px 10px;
    margin-right: 8px;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: black;
    color: white;
  `,
  ExtraSkill: styled.div`
    padding: 5px 10px;
    margin-right: 8px;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: white;
    color: black;
  `
}