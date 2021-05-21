import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  Container,
  Header,
  Title,
  TitleRandom,
  Subtitle,
  Buttons,
  Content,
  CardContainer,
  HeroPhoto,
  Name,
  NickNameBox,
  Icon,
  NickName,
  DetailBox,
  Id,
  Occupation,
  BreakingBadSeasons,
  Status,
  RandomCard,
  HeaderRandom,
  Button,
  LeftCard,
  RightCard,
  Death,
  RandomContent,
  Responsible,
  Words,
  NameBox,
  Birthday,
  Category,
  CategoryHero,
  Season,
  Profession,
  ProfBox,
  FooterContainer,
  Footer,
} from "./styled";

class BreakingBadApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      death: {},
    };
    this.getBreakingBad();
  }

  getData = async (category) => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters?category=${category}`
    ).then((response) => response.json());
    //console.log(response);
    this.setState({
      data: response,
    });
  };

  getBreakingBad = async () => {
    return this.getData("Breaking+Bad");
  };
  getBetterCallSaul = async () => {
    return this.getData("Better+Call+Saul");
  };

  getDeath = async () => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/random-death`
    ).then((response) => response.json());
    //console.log(response);
    this.setState({
      death: response,
    });
  };

  render() {
    const { death, data } = this.state;
    //console.log({ death });
    const items = [
      {
        characters: "62",
        episodes: "102",
        quotes: "70",
        deathCount: "271",
      },
    ];
    return (
      <Container>
        <Header>
          <Title>The Breaking Bad</Title>
          <Subtitle>...Tread Lightly</Subtitle>
          <Buttons>
            <button className={"Saul"} onClick={this.getBetterCallSaul}>
              Better Call Saul
            </button>
            <button className={"White"} onClick={this.getBreakingBad}>
              Breaking Bad
            </button>
          </Buttons>
        </Header>
        <Content>
          {data.map((item) => {
            //console.log(item);
            return <Card {...item} />;
          })}
        </Content>
        <RandomCard>
          <HeaderRandom>
            <TitleRandom>
              Click here to find out about a random death!
            </TitleRandom>
            <Button onClick={this.getDeath}>Death!</Button>
          </HeaderRandom>
          {<Random {...death} />}
        </RandomCard>
        <FooterContainer>
          <a
            href="https://github.com/kain647/breaking-bad"
            aria-label="Github link"
            target="blank"
          >
            <FaGithub />
          </a>
          {items.map((footerInfo) => {
            return <FooterInfo {...footerInfo} />;
          })}
        </FooterContainer>
      </Container>
    );
  }
}

const FooterInfo = (props) => {
  const { characters, episodes, quotes, deathCount } = props;
  return (
    <Footer>
      <p>Characters: {characters}</p>
      <p>Episodes: {episodes}</p>
      <p>Quotes: {quotes}</p>
      <p>Death Count: {deathCount}</p>
    </Footer>
  );
};

const Card = (props) => {
  const {
    name,
    nickname,
    img,
    char_id,
    occupation,
    status,
    birthday,
    appearance,
    category,
  } = props;
  return (
    <CardContainer>
      <HeroPhoto img={img}>
        <NameBox>
          <Name>{name}</Name>
          <NickNameBox>
            <Icon />
            <NickName>{nickname}</NickName>
          </NickNameBox>
        </NameBox>
      </HeroPhoto>
      <DetailBox>
        <Category>
          <CategoryHero>{category}</CategoryHero>
        </Category>
        <Id>
          <span>ID:</span> {char_id}
        </Id>
        <Occupation>
          <span>Occupation:</span>{" "}
          <ProfBox>
            {occupation.map((item) => {
              return <Profession>{item}</Profession>;
            })}
          </ProfBox>
        </Occupation>
        <Birthday>
          <span>Birthday:</span> {birthday}
        </Birthday>
        <BreakingBadSeasons>
          <span>Breaking Bad Seasons:</span>
          {appearance.map((item) => {
            return <Season>{item}</Season>;
          })}
        </BreakingBadSeasons>
        <Status>
          <span>Status:</span> {status}
        </Status>
      </DetailBox>
    </CardContainer>
  );
};

const Random = (props) => {
  const { img, cause, nickname, responsible, last_words } = props;
  return (
    <RandomCard>
      <RandomContent>
        <LeftCard>
          <Name>{nickname}</Name>
          <HeroPhoto img={img} />
        </LeftCard>
        <RightCard>
          <Death>
            <span>Cause of death:</span> {cause}
          </Death>
          <Responsible>
            <span>Responsible:</span> {responsible}
          </Responsible>
          <Words>
            <span>Last words:</span> {last_words}
          </Words>
        </RightCard>
      </RandomContent>
    </RandomCard>
  );
};

export default BreakingBadApi;
