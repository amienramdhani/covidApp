import indonesia from '../../utils/constants/indonesia';
import GlobalCard from '../GlobalCard';

const Global = ({ title, title1 }) => {
  // membuat vaiable data covid indonesia
  const indo = indonesia;
  return (
    <section id='indonesia' className='bg-slate-200 pb-32 pt-36'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <h4 className='mb-2 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl'>
              {title}
            </h4>
            <p className='text-md font-medium text-secondary md:text-lg'>
              {title1}
            </p>
          </div>
        </div>
        {/* Untuk Card Clobal */}
        <div className='flex flex-wrap'>
          {/* looping data covid indonesia dengan maps */}
          {indo.map(function (ina) {
            return <GlobalCard key={ina.status} ina={ina} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Global;
