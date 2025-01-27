import { useNavigate } from 'react-router-dom';

const emptyArray = Array.from({ length: 10 }, () => null);

export const Blogs = () => {
  const navigate = useNavigate();

  return emptyArray.map((_, index) => (
    <button key={index} onClick={() => navigate(`/blogs/${index}`)}>
      Blog {index}
    </button>
  ));
};
