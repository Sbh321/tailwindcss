const App = () => {
  return (
    <div className="bg-slate-900 grid place-content-center h-screen">
      <h1 className="text-yellow-500 text-4xl m-6">This uses tailwind css</h1>

      <div className="">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div>
            <img
              className="h-12 w-12"
              src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2014/02/adidas-originals-logo.png"
              alt="img"
            />
          </div>
          <div>
            <div className="text-2xl font-medium text-black">
              <p className="">Tailwind css</p>
              <p className="text-slate-700 text-base">By Subham Bhandari</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
