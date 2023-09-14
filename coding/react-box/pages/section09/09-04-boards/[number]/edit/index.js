import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphQLMutation(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  );
}
