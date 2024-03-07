import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "63n97e5v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});
//helper function to get image url
const builder = imageUrlBuilder(client);

//sanity 에서 생성한 image들의 url을 받아올 수 있게됨
export const urlFor = (source) => builder.image(source);

// resource sharing 요청 보내는 곳은 3000, 받는 곳은 3333 이므로 서로 origin이 다름
//원래는 resource sharing 요청을 보낼 수 없어서 sharing 할 수 없지만 이걸 풀어줄 수 있음
//sanity 디렉토리에서 실행
//npx sanity cors add http://localhost:3000
export default client;
