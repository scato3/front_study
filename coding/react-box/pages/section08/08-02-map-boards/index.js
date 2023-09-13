import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div>{el.number}</div>
      ))}
    </>
  );
}

// 옵셔널 체이닝
