import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { kAssets } from "./sample";

function App() {
  return (
    <div className="wrapper min-h-screen w-screen grid grid-rows-6 bg-white">
      {/* header */}
      <div className="row-span-1 fixed inset-x-0 top-0 max-h-20 py-2 px-10 flex justify-between bg-black">
        {/* brand & nav */}
        <div className="flex items-center">
          {/* logo */}
          <a
            href="/"
            className="font-sans text-base font-black cursor-pointer text-white mr-20"
          >
            coinbase
          </a>
          <div className=" nav flex items-center space-x-6">
            <h6 className="text-base cursor-pointer active">Portfolio</h6>
            <h6 className="text-base cursor-pointer">Activity</h6>
            <h6 className="text-base cursor-pointer">Settings</h6>
          </div>
        </div>

        {/* profile */}
        <div className="flex items-center">
          {/* user profile information */}
          <div className="flex flex-col items-end">
            <h6 className="text-white text-base">Vera Pomaa</h6>
            <p className="text-white text-opacity-60 font-serif text-sm">
              Senior Frontend Developer
            </p>
          </div>
          {/* avatar */}
          <img
            src="./pomaa.jpg"
            alt="admin"
            className="avatar ml-4 cursor-pointer"
          />
        </div>
      </div>
      {/* content */}
      <div className="row-span-4 pt-24 w-full max-w-6xl mx-auto">
        {/* earnings */}
        <h1 className="text-4xl flex- flex-col font-medium font-serif mb-2">
          $1,234,343.99
        </h1>
        {/* metadata on stock value above */}
        <div className="flex justify-between items-center">
          <h5 className="text-lg">International Portfolio</h5>
          <div className="flex flex-row items-center">
            <p className="text-base font-serif font-medium text-blue mr-2">
              +8.95%
            </p>
            <p className="text-sm font-serif font-medium text-black text-opacity-50">
              Changed 24H ago
            </p>
          </div>
        </div>

        {/* table */}
        <div className="w-full h-auto flex flex-col mt-10 border border-grayed border-opacity-50">
          {/* search */}
          <div className="flex items-center cursor-pointer space-x-4 p-4 border-b border-grayed border-opacity-50">
            <BsSearch className="text-grayed" />
            <p className="text-lg text-grayed">Search</p>
          </div>

          {/* data table */}
          <table className="w-full h-auto border-b border-grayed border-opacity-50">
            <thead>
              <tr>
                <th class="p-2 uppercase text-grayed">Asset</th>
                <th class="p-2 uppercase text-grayed">Balance 24H</th>
                <th class="p-2 uppercase text-grayed">Portfolio %</th>
                <th class="p-2 uppercase text-grayed">Price</th>
                <th class="p-2 uppercase text-grayed">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* loop through all assets & render UI for each */}
              {kAssets.map((item, index) => (
                <tr key={index} className="hover:bg-gray-300">
                  <td class="p-2 text-center">{item.title}</td>
                  <td class="p-2 text-center">{item.balance}</td>
                  <td class="p-2 text-center">{item.portfolio}</td>
                  <td class="p-2 text-center">{item.price}</td>
                  <td class="p-2 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <p className="cursor-pointer text-blue-dark">Withdraw</p>
                      <p className="cursor-pointer text-blue-dark">Deposit</p>
                      <BsThreeDotsVertical className="text-grayed cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* footer */}
          <p className="uppercase text-grayed font-medium cursor-pointer p-4 font-serif mx-auto">
            Show Empty Balances
          </p>
        </div>
      </div>
      {/* footer */}
      <footer className="row-span-1 fixed inset-x-0 bottom-0 max-h-20 px-10 py-4 flex justify-between">
        {/* legal */}
        <div className="flex items-center w-1/3 h-full space-x-10">
          <p className="text-grayed hover:text-black transition duration-150 cursor-pointer">
            Legal & Privacy
          </p>
          <p className="text-grayed hover:text-black transition duration-150 cursor-pointer">
            Terms & Conditions
          </p>
        </div>
        {/* copyright */}
        <div className="flex items-center justify-center w-1/3 h-full">
          <a
            href="/"
            className="text-grayed text-opacity-60 font-semibold cursor-pointer hover:text-opacity-100"
          >
            &copy; coinbase | Vera Pomaa ({new Date().getFullYear()})
          </a>
        </div>
        {/* assistance */}
        <div className="flex items-center justify-end w-1/3 h-full space-x-10">
          <p className="text-blue-dark hover:text-blue transition duration-150 cursor-pointer">
            Need help?
          </p>
          <p className="text-grayed hover:text-black transition duration-150 cursor-pointer">
            +233 55 132 8172
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
