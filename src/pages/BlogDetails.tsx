// import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const generateFacebokLink = (url: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

// const generateXLink = (url: string, title: string) =>
//   `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//     url
//   )}&text=${encodeURIComponent(title)}`;

// const generateLinkedinLink = (url: string) =>
//   `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//     url
//   )}`;

export const BlogDetails = () => {
  const { id } = useParams();

  const onButtonClick = () => {
    window.open(generateFacebokLink(location.href), '_target');
  };

  return (
    <div>
      <p>Blog number {id}</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
};
