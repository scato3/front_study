import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps } from "./BoardWrite.types";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeWriter(e: ChangeEvent<HTMLInputElement>) {
    setWriter(e.target.value);

    if (e.target.value !== "") {
      setWriterError("");
    }

    e.target.value && password && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }

  function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);

    if (e.target.value !== "") {
      setPasswordError("");
    }

    writer && e.target.value && title && contents
      ? setIsActive(true)
      : setIsActive(false);
  }

  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);

    if (e.target.value !== "") {
      setTitleError("");
    }

    writer && password && e.target.value && contents
      ? setIsActive(true)
      : setIsActive(false);
  }

  function onChangeContents(e: ChangeEvent<HTMLTextAreaElement>) {
    setContents(e.target.value);

    if (e.target.value !== "") {
      setContentsError("");
    }

    writer && password && title && e.target.value
      ? setIsActive(true)
      : setIsActive(false);
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
        router.push(`/section01/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (!title && !contents) {
      alert("수정한 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다");
        return;
      }
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
