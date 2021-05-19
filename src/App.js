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
      {/* portfolio */}
      <div className="flex flex-col justify-center text-center w-full max-w-7xl mx-auto">
        <h1 className="font-graphik-medium text-4xl mb-2">
          Create your cryptocurrency portfolio today
        </h1>
        <p className="text-gray-500 my-4 font-graphik">
          Coinbase has a variety of features that make it the best place to
          start trading
        </p>
        <div className="grid w-full grid-cols-6 gap-x-4 mt-14">
          {/* portfolio */}
          <div className="flex flex-col space-y-12 col-span-2">
            {kPortfolio.map((item, index) => (
              <div className="flex space-x-7">
                {/* <img
                  src={item.icon}
                  alt={item.title}
                  className="portfolio-item-icon"
                /> */}
                <div className="bg-white shadow-md w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path d="M36 2.25H0v31.5h36V2.25z" fill="#D4EEFF"></path>
                    <path
                      d="M28.125 36H7.875a1.128 1.128 0 01-1.125-1.125V1.125C6.75.506 7.256 0 7.875 0h20.25c.618 0 1.125.506 1.125 1.125v33.75c0 .619-.507 1.125-1.125 1.125z"
                      fill="#56B4FC"
                    ></path>
                    <path
                      d="M29.25 2.25H6.75v31.5h22.5V2.25z"
                      fill="#1652F0"
                    ></path>
                    <path
                      d="M23 15.137L21.889 14l-6.667 6.822 1.11 1.137L23 15.137z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M16.334 22l1.11-1.137-3.333-3.411-1.11 1.137L16.333 22z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M23.625 3.375h-11.25a1.128 1.128 0 01-1.124-1.125V1.125h13.5V2.25c0 .619-.507 1.125-1.126 1.125z"
                      fill="#56B4FC"
                    ></path>
                    <path
                      d="M15.75 32.063c0 .337.226.562.563.562h3.375c.338 0 .563-.225.563-.562 0-.338-.226-.563-.563-.563h-3.375c-.337 0-.562.225-.562.563z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <h6 className="font-graphik-medium text-xl mb-3">
                    {item.title}
                  </h6>
                  <p className="font-graphik text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* image */}
          <div className="flex items-center justify-center col-span-4">
            <img
              src={
                "https://assets.coinbase.com/assets/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg"
              }
              alt="portfolio"
              className="portfolio-image"
            />
          </div>
        </div>
      </div>

      {/* cryptocurrency */}
      <div className="section border-t border-gray-300">
        <h1 className="font-graphik-medium text-4xl mb-2">
          The most trusted cryptocurrency platform
        </h1>
        <p className="text-gray-500 my-4 font-graphik">
          Here are a few reasons why you should choose Coinbase
        </p>
        <div className="grid w-full grid-cols-3 gap-x-4 mt-24">
          {/* item 1: secure storage */}
          <div className="flex flex-col space-y-4 items-center px-6">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path d="M56 0H8v50h48V0z" fill="#BFE9FF"></path>
              <path d="M64 10H0v48h64V10z" fill="#56B4FC"></path>
              <path d="M56 10H8v40h48V10z" fill="#1652F0"></path>
              <path d="M10 16H6v8h4v-8zM10 36H6v8h4v-8z" fill="#1652F0"></path>
              <path d="M64 58h-8v6h8v-6zM8 58H0v6h8v-6z" fill="#56B4FC"></path>
              <path
                d="M41.19 20.81c-5.07-5.07-13.32-5.07-18.38 0-5.06 5.07-5.07 13.32 0 18.38 2.53 2.53 5.86 3.8 9.19 3.8 3.33 0 6.66-1.27 9.19-3.8 5.07-5.07 5.07-13.31 0-18.38zM32 19c2.5 0 5 .85 7.04 2.55l-2.85 2.85A6.99 6.99 0 0032 23c-1.53 0-2.98.5-4.19 1.4l-2.85-2.85A11.03 11.03 0 0132 19zm3.54 14.54c-.95.94-2.2 1.46-3.54 1.46-1.34 0-2.59-.52-3.54-1.46A4.952 4.952 0 0127 30c0-1.33.52-2.59 1.46-3.54.94-.95 2.2-1.46 3.54-1.46 1.34 0 2.59.52 3.54 1.46.95.94 1.46 2.21 1.46 3.54s-.52 2.59-1.46 3.54zM23.55 22.96l2.85 2.85A6.99 6.99 0 0025 30c0 1.53.5 2.98 1.4 4.19l-2.85 2.85a11.018 11.018 0 010-14.08zm1.41 15.49l2.85-2.85a6.969 6.969 0 008.38 0l2.85 2.85a11.018 11.018 0 01-14.08 0zm15.49-1.41l-2.85-2.85c.9-1.2 1.4-2.65 1.4-4.19 0-1.53-.5-2.98-1.4-4.19l2.85-2.85a11.018 11.018 0 010 14.08z"
                fill="#fff"
              ></path>
            </svg>
            <h2 className="mt-20 mb-4 text-xl font-graphik-medium">
              Secure storage
            </h2>
            <p className="mb-6 font-graphik text-base">
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
            <a href="#cryptocurrency">
              <div className="flex items-center justify-center">
                <p className="font-graphik-medium text-sm text-blue-700">
                  Learn how Coinbase keeps your funds safe and secure
                </p>
                <HiChevronRight className="text-blue-700" />
              </div>
            </a>
          </div>

          {/* item 2:  */}
          <div className="flex flex-col space-y-4 items-center px-6">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M56 56h-8v8h8c4.42 0 8-3.58 8-8h-8z"
                fill="#BFE9FF"
              ></path>
              <path
                d="M48 56V0H0v56c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
                fill="#56B4FC"
              ></path>
              <path
                d="M48 56H0c0 4.42 3.58 8 8 8h48c-4.42 0-8-3.58-8-8z"
                fill="#1652F0"
              ></path>
              <path
                d="M40 30H8v2h32v-2zM40 36H8v2h32v-2zM40 42H8v2h32v-2zM32 48H16v2h16v-2zM23.5 24.66l-3.24-5.92-5.92-3.24 5.92-3.24 3.24-5.92 3.24 5.92 5.92 3.24-5.92 3.24-3.24 5.92zm-4.99-9.16l3.22 1.76 1.76 3.22 1.76-3.22 3.22-1.76-3.22-1.76-1.76-3.22-1.76 3.22-3.22 1.76z"
                fill="#fff"
              ></path>
            </svg>
            <h2 className="mt-20 mb-4 text-xl font-graphik-medium">
              Protected by insurance
            </h2>
            <p className="mb-6 font-graphik text-base">
              Cryptocurrency stored on our servers is covered by our insurance
              policy.
            </p>
            <a href="#cryptocurrency">
              <div className="flex items-center justify-center">
                <p className="font-graphik-medium text-sm text-blue-700">
                  Learn how your crypto is covered by our insurance policy
                </p>
                <HiChevronRight className="text-blue-700" />
              </div>
            </a>
          </div>

          {/* item 3: Industry best practices */}
          <div className="flex flex-col space-y-4 items-center px-6">
            <svg width="56" height="64" viewBox="0 0 56 64" fill="none">
              <path d="M56 0H24v64h32V0z" fill="#BFE9FF"></path>
              <path
                d="M0 8v28c0 13.25 24 24 24 24s24-10.75 24-24V8H0z"
                fill="#56B4FC"
              ></path>
              <path d="M24 8v52s24-10.75 24-24V8H24z" fill="#1652F0"></path>
              <path
                d="M7 15v21c0 4.92 8.57 11.72 16.53 15.97l.47.25.47-.25C32.43 47.72 41 40.92 41 36V15H7zm32 2v6H9v-6h30zM24 49.95C15.55 45.35 9 39.28 9 36V25h30v11c0 3.28-6.55 9.35-15 13.95z"
                fill="#fff"
              ></path>
            </svg>
            <h2 className="mt-20 mb-4 text-xl font-graphik-medium">
              Industry best practices
            </h2>
            <p className="mb-6 font-graphik text-base">
              Coinbase supports a variety of the most popular digital
              currencies.
            </p>
            <a href="#cryptocurrency">
              <div className="flex items-center justify-center">
                <p className="font-graphik-medium text-sm text-blue-700">
                  Learn how we implement industry best practices for account
                  security
                </p>
                <HiChevronRight className="text-blue-700" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="flex justify-center bg-blue-700">
        <div className="flex flex-row justify-center items-center flex-grow flex-shrink mx-auto w-full max-w-6xl p-6">
          {/* item 1 */}
          <div className="banner-grid-item">
            <h1 className="text-6xl font-graphik-medium">$335B</h1>
            <p className="font-graphik text-gray-300">
              Quarterly volume traded
            </p>
          </div>

          {/* item 2 */}
          <div className="banner-grid-item">
            <h1 className="text-6xl font-graphik-medium">100+</h1>
            <p className="font-graphik text-gray-300">Countries supported</p>
          </div>

          {/* item 3 */}
          <div className="banner-grid-item">
            <h1 className="text-6xl font-graphik-medium">56+M</h1>
            <p className="font-graphik text-gray-300">Verified users</p>
          </div>
        </div>
      </div>



    </div>

  );
}

export default App;
