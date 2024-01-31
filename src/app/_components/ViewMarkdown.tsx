import ReactMarkdown from "react-markdown";

const markdownString = `
# Markdown
## markdown

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!
`;

const ViewMarkdown = () => {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>;
};

export default ViewMarkdown;
