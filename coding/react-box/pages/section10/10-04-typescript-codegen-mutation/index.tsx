import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";

const MyGraphQl = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutation() {
  // const [counter, setCounter] = useState<number>();
  // const [MyFunction] = useMutation<결과타입, 변수타입>(MyGraphQl);
  const [MyFunction] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(MyGraphQl);
  const onClickSubmit = async () => {
    const result = await MyFunction({
      //variables가 $ 역할을 함
      variables: {
        writer: "훈이",
        title: "안녕하세요",
        contents: "반갑습니다!",
      },
    });
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
