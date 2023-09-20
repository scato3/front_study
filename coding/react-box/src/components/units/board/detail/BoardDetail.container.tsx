import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./BoardWrite.queries";
import BoardDetailUi from "./BoardDetail.presenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== "string") return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );

  const onClickMoveToBoardEdit = () => {
    router.push(`/section01/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUi
      data={data}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
    />
  );
}
