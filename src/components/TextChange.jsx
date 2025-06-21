import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TextChange = () => {
  const [text] = useTypewriter({
    words: ['Kyachingprue Marma', 'Web Developer', 'Programmer', 'Full-Stack Developer', 'Coder'],
    loop: Infinity,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000
  })
  return (
    <div>
      <h1 className='p-2'>
        I'm {' '}
        <span style={{ fontWeight: 'bold', color: 'skyblue' }}>
          {text}
        </span>
        <span style={{ color: 'white' }}>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default TextChange;