import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

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
  Error,
} from "../../../styles/boardNew";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function boardsNewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeWriter(e) {
    setWriter(e.target.value);

    if (e.target.value !== "") {
      setWriterError("");
    }
  }

  function onChangePassword(e) {
    setPassword(e.target.value);

    if (e.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);

    if (e.target.value !== "") {
      setTitleError("");
    }
  }

  function onChangeContents(e) {
    setContents(e.target.value);

    if (e.target.value !== "") {
      setContentsError("");
    }
  }

  const onClickSubmit = async () => {
    if (!writer) setWriterError("작성자를 입력해주세요.");
    if (!password) setPasswordError("패스워드를 입력해주세요.");
    if (!title) setTitleError("제목을 입력해주세요.");
    if (!contents) setContentsError("내용을 입력해주세요.");

    if (writer && password && title && contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      console.log(result);
      alert("회원가입 성공");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WrtierWrapper>
        <regWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <Error>{writerError}</Error>
        </regWrapper>
        <regWrapper>
          <Label>비밀번호</Label>
          <Password
            type="text"
            placeholder="비밀번호를 적어주세요."
            onChange={onChangePassword}
          />
          <Error>{passwordError}</Error>
        </regWrapper>
      </WrtierWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <Error>{titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContents}
        />
        <Error>{contentsError}</Error>
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
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
