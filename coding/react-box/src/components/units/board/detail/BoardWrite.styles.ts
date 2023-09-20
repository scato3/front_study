import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;

export const CardWrapper = styled.div`
  padding: 80px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flext-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: black;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #828282;
`;

export const Body = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid #bdbdbd;
  margin: 0 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
