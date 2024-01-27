const Title = ({ title, color }) => {
  return (
    <>
      <h1
        className={`font-family-1 mt-20 font-700 ${color}`}
        style={{ fontSize: '1.5rem' }}
      >
        {title}
      </h1>
    </>
  );
};

export default Title;
