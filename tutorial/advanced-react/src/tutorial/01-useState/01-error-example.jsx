const ErrorExample = () => {
  let count = 0;

  const clickMe = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={clickMe}>
        Increment
      </button>
    </div>
  );
};

export default ErrorExample;
