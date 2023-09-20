import { stringify } from "querystring";

export default function TypeScriptPage() {
  let aaa = "안녕하세요";
  //   aaa = 3;

  // 타입 명시
  let bbb: string = "반갑습니다";
  //   bbb = 10;

  let ccc: number | string = 1000;
  ccc = "1000원";

  let eee: boolean = true;
  eee = false;

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
  }

  let fff: number[] = [1, 2, 3, 4, 5];
  //   let ggg: string[] = ["철수", "영희", 10];

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  };

  profile.name = "훈이";
  profile.age = "8살";
  profile.hobby = "수영";

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };

  const result2 = add2(1000, 2000, "원");

  // any타입
  let qqq: any = "철수";
  qqq = 123;
  qqq = true;

  return <></>;
}
