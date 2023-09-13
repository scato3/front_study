import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1847px;
  border: 1px solid black;
  margin: 100px auto;
  padding: 60px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px #bdbdbd;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

export const WrtierWrapper = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  justify-content: space-between;
`;

export const Writer = styled.input`
  width: 480px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 480px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const regWrapper = styled.div``;

export const InputWrapper = styled.div`
  width: 1020px;
  padding: 40px 24px 0 0;
`;

export const Subject = styled.input`
  width: 1020px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 1020px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px 0 0 16px;
  font-size: 16px;
  font-weight: 400;
  color: #bdbdbd;
  resize: none;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  cursor: pointer;
  color: white;
`;

export const Address = styled.input`
  width: 1020px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 1020px;
  height: 46px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  width: 1020px;
  padding-top: 40px;
`;

export const UpLoadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 1020px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 180px;
  height: 52px;
  color: black;
  font-size: 16px;
  font-weight: 500;
  border: none;

  background-color: ${(props) => (props.isActive ? "yellow" : "none")};
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
