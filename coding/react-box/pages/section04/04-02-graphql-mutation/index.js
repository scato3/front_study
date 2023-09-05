import { useMutation, gql } from "@apollo/client";

const MyGraphQl = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요!", contents: "반갑습니다") {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutation() {
  const [MyFunction] = useMutation(MyGraphQl);
  const onClickSubmit = async () => {
    const result = await MyFunction();
    console.log(result);
  };

  return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
