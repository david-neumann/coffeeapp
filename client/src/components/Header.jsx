const Header = ({ headerText, iconUrlPath, methodName }) => {
  return (
    <>
      {iconUrlPath ? (
        <header className='flex items-center gap-x-2 bg-emerald-200 rounded-b-[40px] pt-10 pb-6 px-6 mb-8'>
          <img
            src={`/coffee_icons/${iconUrlPath}`}
            alt={methodName}
            className='mx-2 p-2 w-16 aspect-square bg-stone-50 rounded-3xl'
          />
          <h1 className='text-4xl font-["Caslon_Doric_Bold"] text-coffee underline decoration-4 underline-offset-4 decoration-yellow-100'>
            {methodName}
          </h1>
        </header>
      ) : (
        <header className='bg-emerald-200 rounded-b-[40px] pt-10 pb-2 px-8'>
          <h1 className='text-3xl font-["Caslon_Doric_Bold"] text-coffee mb-10 underline decoration-4 underline-offset-4 decoration-yellow-100'>
            {headerText}
          </h1>
        </header>
      )}
    </>
  );
};

export default Header;
