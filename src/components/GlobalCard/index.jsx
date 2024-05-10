const GlobalCard = (props) => {
  const { ina } = props;
  return (
    <div className='w-full px-6 lg:w-1/2 xl:w-1/3'>
      <div className='mb-10 overflow-hidden rounded-xl bg-white'>
        <div className='px-6 py-8'>
          <h3 className='mb-3 block text-4xl font-semibold text-dark hover:text-primary text-center'>
            {ina.status}
          </h3>
          <p className='mb-6 text-2xl font-medium text-secondary text-center'>
            {ina.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalCard;
