import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const [MyFunction] = useMutation(MyGraphQl);
  const onClickSubmit = async () => {
    try {
      const result = await MyFunction({
        //variables가 $ 역할을 함
        variables: {
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다!",
        },
      });
      console.log(result);
      router.push(
        `./05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
