import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  //background: #dadada;
`;
export const Title = styled.h1`
  font-weight: 700;
  margin: 0;
  letter-spacing: 3px;
  margin-right: 10px;
  img {
    width: 450px;
    height: auto;
  }
`;
export const Subtitle = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  letter-spacing: 2px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  .Saul,
  .White {
    min-width: 64px;
    align-items: center;
    font-size: 0.9em;
    letter-spacing: 1.5px;
    background: transparent;
    border-radius: 5%;
    border: none;
    padding: 6px 16px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    cursor: pointer;
    margin-right: 10px;
    :active {
      position: relative;
      top: 1px;
    }
  }
`;
export const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 50px;
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  //padding: 30px;
`;
export const HeroPhoto = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${({ img }) => img || `images/notImage.jpg`});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Name = styled.h2`
  display: flex;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const NickNameBox = styled.div`
  display: flex;
  font-weight: 500;
`;
export const Icon = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  //background-image: url(${({ icon }) => icon});
  background-image: url(images/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;
export const NickName = styled.div`
  display: flex;
`;
export const DetailBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 300px;
  height: 350px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  background: #dadada;
  span {
    margin-right: 10px;
    font-weight: 500;
  }
`;
export const Id = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Occupation = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
export const BreakingBadSeasons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Season = styled.div`
  display: flex;
	width: 25px;
	align-items: center;
	justify-content: center;
  margin-right: 5px;
  background: #eee;
	border-radius: 50px;
	padding: 2px;
  :last-child {
    margin-right: 0;
  }
`;
export const Status = styled.div`
  display: flex;
`;
export const RandomCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  //margin-bottom: 50px;
  //background: #dadada;
`;
export const HeaderRandom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  display: flex;
  min-width: 64px;
  align-items: center;
  font-size: 0.9em;
  letter-spacing: 1.5px;
  background: transparent;
  border-radius: 5%;
  border: none;
  padding: 6px 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  cursor: pointer;
  :active {
    position: relative;
    top: 1px;
  }
`;
export const LeftCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
`;
export const RightCard = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  word-break: break-all;
  justify-content: center;
  flex-direction: column;
  span {
    font-weight: 500;
    margin-right: 10px;
  }
`;
export const Death = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const RandomContent = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Responsible = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Words = styled.div`
  display: flex;
`;
export const NameBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;
export const Birthday = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Category = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const CategoryHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
export const Profession = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const ProfBox = styled.div`
  display: flex;
  flex-direction: column;
`;
