// import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const generateFacebokLink = (url: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

const generateXLink = (url: string, title: string) =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;

const generateLinkedinLink = (url: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

export const BlogDetails = () => {
  const { id } = useParams();

  const onFacebookButtonClick = () => {
    window.open(generateFacebokLink(location.href), '_target');
  };

  const onXButtonClick = () => {
    window.open(generateXLink(location.href, 'Best blog ever!'), '_target');
  };

  const onLinkedinButtonClick = () => {
    window.open(generateLinkedinLink(location.href), '_target');
  };

  return (
    <div>
      <p>Blog number {id}</p>
      <button onClick={onFacebookButtonClick}>Share Facebook</button>
      <button onClick={onXButtonClick}>Share X</button>
      <button onClick={onLinkedinButtonClick}>Share Linkedin</button>
    </div>
  );
};
