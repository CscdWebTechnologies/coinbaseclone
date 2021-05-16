import { BsArrowRight } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import ChartIcon from "./chart_icon";
import MobileSvg from "./mobile";
import { kEarnings, kFooterCategories, kPortfolio } from "./sample";

function App() {
  return (
    <div className="grid w-screen h-screen grid-rows-coinbase box-border gap-y-8">
      {/* nav */}
      <div className="border-b border-gray-200">
        <div className="nav">
          {/* brand */}
          <div className="flex items-center w-full col-span-2">
            <img
              src={
                "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
              }
              alt="brand"
              className="brand"
            />
          </div>
          {/* nav */}
          <div className="flex w-full items-center justify-center space-x-8 col-span-4">
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Prices</p>
            </a>
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Learn</p>
              
            </a>
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Individuals</p>
            </a>
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Businesses</p>
            </a>
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Developers</p>
            </a>
            <a href="#page" className="nav-link-item relative">
              <p className="font-mediumbold font-graphik text-sm">Company</p>
            </a>
          </div>
          {/* cta */}
          <div className="cta col-span-2">
            <a href="#sign-in" className="font-medium">
              <p>Sign in</p>
            </a>
            <a
              href="#get-started"
              className="btn-primary text-sm px-4 py-2 rounded-sm"
            >
              <p>Get started</p>
            </a>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="grid grid-cols-2 max-w-4xl 2xl:max-w-7xl w-full mx-auto gap-x-20">
        {/* left: hero section */}
        <div className="flex flex-col justify-center space-y-6">
          {/* portfolio nav */}
          <div className="flex space-x-2 items-center cursor-pointer">
            {/* subhead */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                fill="#1652F0"
              ></path>
              <path
                d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z"
                fill="#fff"
              ></path>
            </svg>
            <p className="text-blue-500 font-semibold hover:underline">
              Jump start your portfolio
            </p>
            <BsArrowRight className="h-6 w-auto text-blue-500" />
          </div>

          {/* header */}
          <h1 className="text-6xl font-graphik-semibold w-full">
            Jump start your crypto portfolio
          </h1>
          <h6 className="text-xl font-graphik-medium">
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </h6>
          <form className="grid gap-x-4 grid-cols-5">
            <div className="border border-gray-300 col-span-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                aria-label="email address"
                autocomplete={false}
                autocorrect={false}
                spellcheck={false}
                autoCapitalize={false}
                className="p-5"
              />
            </div>
            <div className="btn-primary p-5 w-full col-span-2">
              <p>Get started</p>
            </div>
          </form>
          <a
            href="#terms"
            className="text-xs text-blue-500 underline cursor-pointer"
          >
            *Terms apply
          </a>
        </div>

        {/* right: mobile image */}
        <div className="flex items-center justify-center">
          <MobileSvg />
        </div>
      </div>

      {/* table */}
      <div className="border border-gray-300 w-full h-full max-w-6xl mx-auto rounded-sm">
        <table className="table-auto border-collapse w-full h-full">
          <thead className="">
            <tr>
              <th className="table-header">#</th>
              <th className="table-header-item">Name</th>
              <th className="table-header-item">Price</th>
              <th className="table-header-item">Change</th>
              <th className="table-header-item">Chart</th>
              <th className="table-header-item">Trade</th>
            </tr>
          </thead>
          <tbody>
            {/* bitcoin */}
            <tr>
              {/* index */}
              <td className="asset-index table-content-item">1</td>
              {/* name */}
              <td className="table-content-item">
                <div className="asset-name">
                  <img
                    src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
                    alt="bitcoin"
                    className="asset-icon"
                  />
                  <h6>Bitcoin</h6>
                  <h5>BTC</h5>
                </div>
              </td>
              {/* price */}
              <td className="table-content-item">
                <p className="asset-price">GHS 288,644.03</p>
              </td>
              {/* change */}
              <td className="table-content-item">
                <p className="asset-change">-10.58%</p>
              </td>
              {/* diagram */}
              <td className="table-content-item">
                <ChartIcon />
              </td>
              {/* buy action */}
              <td className="table-content-item">
                <div className="btn-green w-2/3">
                  <p className="font-medium font-graphik-medium">Buy</p>
                </div>
              </td>
            </tr>

            {/* ethereum */}
            <tr>
              {/* index */}
              <td className="asset-index table-content-item">2</td>
              {/* name */}
              <td className="table-content-item">
                <div className="asset-name">
                  <img
                    src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"
                    alt="bitcoin"
                    className="asset-icon"
                  />
                  <h6>Ethereum</h6>
                  <h5>ETH</h5>
                </div>
              </td>
              {/* price */}
              <td className="table-content-item">
                <p className="asset-price">GHS 20,629.09</p>
              </td>
              {/* change */}
              <td className="table-content-item">
                <p className="asset-change">-11.85%</p>
              </td>
              {/* diagram */}
              <td className="table-content-item">
                <ChartIcon />
              </td>
              {/* buy action */}
              <td className="table-content-item">
                <div className="btn-green w-2/3">
                  <p className="font-medium font-graphik-medium">Buy</p>
                </div>
              </td>
            </tr>

            {/* bitcoin cash */}
            <tr>
              {/* index */}
              <td className="asset-index table-content-item">3</td>
              {/* name */}
              <td className="table-content-item">
                <div className="asset-name">
                  <img
                    src="https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
                    alt="bitcoin"
                    className="asset-icon"
                  />
                  <h6>Bitcoin Cash</h6>
                  <h5>BCH</h5>
                </div>
              </td>
              {/* price */}
              <td className="table-content-item">
                <p className="asset-price">GHS 6,678.49</p>
              </td>
              {/* change */}
              <td className="table-content-item">
                <p className="asset-change">-14.64%</p>
              </td>
              {/* diagram */}
              <td className="table-content-item">
                <ChartIcon />
              </td>
              {/* buy action */}
              <td className="table-content-item">
                <div className="btn-green w-2/3">
                  <p className="font-medium font-graphik-medium">Buy</p>
                </div>
              </td>
            </tr>

            {/* litecoin */}
            <tr>
              {/* index */}
              <td className="asset-index table-content-item">4</td>
              {/* name */}
              <td className="table-content-item">
                <div className="asset-name">
                  <img
                    src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png"
                    alt="bitcoin"
                    className="asset-icon"
                  />
                  <h6>Litecoin</h6>
                  <h5>LTC</h5>
                </div>
              </td>
              {/* price */}
              <td className="table-content-item">
                <p className="asset-price">GHS 1,705.48</p>
              </td>
              {/* change */}
              <td className="table-content-item">
                <p className="asset-change">-13.85%</p>
              </td>
              {/* diagram */}
              <td className="table-content-item">
                <ChartIcon />
              </td>
              {/* buy action */}
              <td className="table-content-item">
                <div className="btn-green w-2/3">
                  <p className="font-medium font-graphik-medium">Buy</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* marketing */}
      <div className="grid grid-cols-2 max-w-6xl mx-auto w-full gap-x-12">
        <div className="flex flex-col justify-center w-3/4 space-y-4">
          <h2 className="text-3xl font-graphik-medium">
            Earn up to $25 worth of crypto
          </h2>
          <p className="text-sm font-graphik">
            Discover how specific cryptocurrencies work — and get a bit of each
            crypto to try out for yourself.
          </p>
          <div className="btn-primary text-sm w-1/3 px-4 py-2 rounded-sm">
            <p>Start earning</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            {kEarnings.map((item, index) => (
              <div key={index} className="earnings-list-item">
                <div className="flex items-center space-x-4">
                  {/* leading icon */}
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="icon icon-earning"
                  />
                  {/* info */}
                  <div className="flex items-center justify-start space-x-2">
                    <h4 className="font-graphik-medium text-xl">{item.name}</h4>
                    <h4 className="uppercase font-graphik-medium text-lg">
                      {item.abbrev}
                    </h4>
                  </div>
                </div>
                {/* earnings value */}
                <div className="flex justify-center">
                  <h6 className="text-green-500">{item.earnings}</h6>
                </div>
              </div>
            ))}
          </div>
          <a href="#view-more" className="cursor-pointer">
            <div className="flex items-center space-x-1">
              <p className="text-base text-blue-700">View more</p>
              <HiChevronRight className="text-blue-700 text-base" />
            </div>
          </a>
        </div>
      </div>

     
          </div>
        
  );
}

export default App;
