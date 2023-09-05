import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 백엔드에서 받아온 데이터 임시로 저장해놓기
  });
  return (
    <>
      <div>app.js 컴포넌트 시작 부분</div>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <div>app.js 컴포넌트 시작 부분</div>
    </>
  );
}
