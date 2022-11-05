function Footer() {
  return (
    <footer className='bg-gray'>
      <div className='max-w-7xl py-8 mx-auto justify-between'>
        <div className='flex justify-center '>
          <div className='text-center opacity-40 flex flex-col'>
            <span className=' prose prose-slate prose-sm'>
              Bergen Johnston – Professional Something or Another
            </span>
            <span className='prose prose-slate prose-sm text-md'>
              © Copyright {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
