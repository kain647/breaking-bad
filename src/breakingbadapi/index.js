import React from "react";
import {
  Container,
  Header,
  Title,
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
  }

  getBreakingBad = async () => {
    return this.getData("Breaking+Bad")
  };
  getBetterCallSaul = async () => {
    return this.getData("Better+Call+Saul")
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
            <Title>Click here to find out about a random death!</Title>
            <Button onClick={this.getDeath}>Death!</Button>
          </HeaderRandom>
          {<Random {...death} />}
        </RandomCard>
      </Container>
    );
  }
}

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
