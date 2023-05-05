const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface IResponse {
  Id: number;
  Email: string;
}
const getData = async (url: string) => {
  const response = await fetch(url);
  let result = await response.json();
  const res: IResponse[] = [];
  result = result.map((el: { id: number; email: string }) =>
    res.push({ Id: el.id, Email: el.email })
  );
  return res;
};
getData(COMMENTS_URL).then((data: { Id: number; Email: string }[]) => {
  console.log(data);
});
