import assets from '../../assets/nurse.svg';

const Hero = () => {
  return (
    <section id='home' className='pt-12'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-20 lg:w-1/2'>
            <h1 className='mt-1 block text-4xl font-bold text-primary md:text-xl lg:text-5xl'>
              Covid ID
            </h1>
            <h2 className='mb-5 mt-3 text-lg font-medium text-secondary lg:text-2xl'>
              Monitoring Perkembangan Covid
            </h2>
            <p className='mb-10 font-medium leading-relaxed text-secondary text-justify'>
              Covid App Merupakan suatu Platform yang menyediakan informasi
              mengenai jumlah covid di Indonesia dan diseluruh dunia.Di dalam
              website ini akan memberikan informasi yang positif terkena covid
              yang meninggal dan yang sembuh dari covid.
            </p>

            <a
              href='#About'
              className='rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg'
            >
              Vaccine
            </a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='relative mt-10 lg:right-0 lg:mt-9'>
              <img src={assets} alt='Nurse' className='mx-auto max-w-full' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
