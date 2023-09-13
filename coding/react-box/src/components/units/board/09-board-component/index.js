export default function BoardComponent(props) {
  return (
    <div>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목 : <input type="text" />
      내용 : <input type="text" />
      <button>{props.isEdit ? "수정" : "등록"}하키</button>
    </div>
  );
}
