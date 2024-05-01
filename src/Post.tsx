type Post = {
  author: string;
  content: string;
};

export function Post({ author, content }: Post) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  );
}
