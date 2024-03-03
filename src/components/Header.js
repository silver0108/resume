import { Link } from 'react-router-dom';
import myImage from '../assets/images/silver.jpg';
import githubImage from '../assets/images/github.svg';
import emailImage from '../assets/images/email.png';
import styled from 'styled-components';

export default function Header() {
  return (
    <St.HeaderWrapper>
      <St.UserImageWrapper>
        <St.UserImage src={myImage} alt="soeun"/>
      </St.UserImageWrapper>
      <St.UserDescription>
        <St.UserName>김소은</St.UserName>
        <St.UserContactWrapper>
          <St.UserContactZone>
            <St.IconWrapper>
              <img src={emailImage} alt='email' width={40} />
            </St.IconWrapper>
            <div>kimsoeun0108@gmail.com</div>
          </St.UserContactZone>
          <St.UserContactZone>
            <St.LinkWrapper href='https://github.com/silver0108'>
              <St.IconWrapper>
                <img src={githubImage} alt='github' width={40} />
              </St.IconWrapper>
              <div>github</div>
            </St.LinkWrapper>
          </St.UserContactZone>
        </St.UserContactWrapper>
      </St.UserDescription>
    </St.HeaderWrapper>
  )
}

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justifiy-content: center;
    align-items: center;
    border-bottom: 1px solid silver;
    padding: 20px 50px;

    @media (max-width: 890px) {
      flex-direction: column;
    }
  `,
  UserImageWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  UserImage: styled.img`
    width: 200px;
    
    @media (max-width: 890px) {
      width: 170px;
    }

    @media (max-width: 550px) {
      width: 150px;
    }
  `,
  UserDescription: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 100px;

    @media (max-width: 890px) {
      margin: 0 100px;
      align-items: center;
    }
  `,
  UserName: styled.div`
    font-size: 50px;
    font-weight: bold;
    white-space: nowrap;

    @media (max-width: 890px) {
      margin-top: 20px;
    }

    @media (max-width: 550px) {
      font-size: 30px;
    }
  `,
  UserContactWrapper: styled.div`
    margin-top: 10px;
  `,
  UserContactZone: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin: 10px 10px 10px 0;
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
  `,
  LinkWrapper: styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    &:link {
      color: black;
    }
    &:visited {
      color: black;
    }
    &:hover {
      color: dimgray;
    }
  `
}