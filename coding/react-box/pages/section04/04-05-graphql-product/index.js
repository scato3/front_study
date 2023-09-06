import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const MyGraphQl = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphQlMutation() {
  const [seller, setSeller] = useState();
  const [name, setName] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState(0);

  const [MyFunction] = useMutation(MyGraphQl);
  const onClickSubmit = async () => {
    const result = await MyFunction({
      variables: {
        seller,
        createProductInput: {
          name,
          detail,
          price,
        },
      },
    });
    console.log(result);
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };

  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      제품 이름 : <input type="text" onChange={onChangeName} />
      상세 내용 : <input type="text" onChange={onChangeDetail} />
      가격 : <input type="number" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
