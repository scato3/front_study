import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite() {
  const router = useRouter();

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
      try {
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
        router.push(`./${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
