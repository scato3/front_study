import {
  Wrapper,
  Title,
  WrtierWrapper,
  Writer,
  Password,
  Label,
  InputWrapper,
  Subject,
  Contents,
  ZipCodeWrapper,
  ZipCode,
  SearchButton,
  Address,
  Youtube,
  regWrapper,
  ImageWrapper,
  UpLoadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
} from "../../../styles/boardNew";

export default function boardsNewPage() {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WrtierWrapper>
        <regWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요." />
        </regWrapper>
        <regWrapper>
          <Label>비밀번호</Label>
          <Password type="text" placeholder="비밀번호를 적어주세요." />
        </regWrapper>
      </WrtierWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipCodeWrapper>
          <ZipCode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipCodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <UpLoadButton>+</UpLoadButton>
        <UpLoadButton>+</UpLoadButton>
        <UpLoadButton>+</UpLoadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
