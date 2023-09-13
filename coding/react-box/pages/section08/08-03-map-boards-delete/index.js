import { useQuery, gql, useMutation } from "@apollo/client";
import { Fragment } from "react/cjs/react.production.min";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const onClickDelete = (e) => {
    deleteBoard({
      variables: { number: Number(e.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el, idx) => (
        <div key={el.number}>
          {/*idx는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 idx와 동일 값을 갖게 됌 
          <> </>, <Fragment></Fragment>
          프레그먼트에 key 입력하는 방법 ? <Fragment key={1}></Fragment>
          */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </>
  );
}
