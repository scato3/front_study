// 컴포넌트 위에 만든 이유: 컴포넌트가 리렌더링돼도 다시 안만들어짐

const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
];

export default function MapFruitsPage() {
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  return (
    <>
      {aaa}
      {FRUITS.map((el) => (
        <div>
          {el.number} {el.title}
        </div>
      ))}
    </>
  );
}
