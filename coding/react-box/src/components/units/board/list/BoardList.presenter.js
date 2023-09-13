import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardsList.styles";

export default function BoardListUI(props) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderNum>ID</S.ColumnHeaderNum>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderWriter>작성자</S.ColumnHeaderWriter>
        <S.ColumnHeaderDate>날짜</S.ColumnHeaderDate>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.writer}
          </S.ColumnBasic>
          <S.ColumnBasic id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {getDate(el.createdAt)}
          </S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
