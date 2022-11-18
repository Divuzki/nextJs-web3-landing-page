import { featured_drops_list, list_of_members } from "../components/list";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Area */}
      <div className="w-full flex gap-4 smd:flex-nowrap flex-wrap flex-grow flex-col md:flex-row justify-center items-center h-full md:p-8 p-2">
        <div className="flex flex-col w-full justify-start items-start gap-4">
          <h3 className="md:text-7xl text-5xl font-sans font-extrabold flex flex-col w-full gap-1">
            {/* <span>The Best Marketplace For</span>
            <span className="text-amber-600">NFTs</span> */}

            <span>
              Botbuddyz <span className="text-amber-600">x</span> Auction{" "}
              <span className="text-amber-600">x</span> Merch
            </span>
            {/* <span className="text-amber-600">NFT</span> */}
            {/* <span>Auction Site</span> */}
          </h3>
          <p className="text-sm opacity-70 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            mollitia? Voluptas assumenda esse nobis minima! Fugit cumque
            voluptatum, at architecto ipsam omnis iure nobis laborum?
          </p>

          <div className="flex gap-4 flex-wrap py-4">
            <button className="px-4 py-2 border border-primary bg-blue-800 active:bg-blue-900 md:hover:bg-blue-900 rounded-lg">
              White Paper
            </button>
            <button className="px-4 py-2 border border-blue-800 rounded-lg active:bg-blue-900 md:hover:bg-blue-900">
              Connect Wallet
            </button>
          </div>

          <div className="flex gap-8 flex-wrap py-3">
            <div className="p-1 flex flex-col justify-center items-center gap-1">
              <span className="text-xl">20k</span>
              <span className="text-sm opacity-70 text-gray-300">
                Collections
              </span>
            </div>
            <div className="p-1 flex flex-col justify-center items-center gap-1">
              <span className="text-xl">16k</span>
              <span className="text-sm opacity-70 text-gray-300">Auctions</span>
            </div>
            <div className="p-1 flex flex-col justify-center items-center gap-1">
              <span className="text-xl">12k</span>
              <span className="text-sm opacity-70 text-gray-300">Artists</span>
            </div>
          </div>
        </div>
        <div className="flex w-full smd:justify-end justify-center md:pr-8">
          <div className="w-96 gap-1 h-[450px] rounded-3xl bg-slate-800 overflow-hidden flex flex-col items-end px-3 py-4">
            <figure
              style={{
                backgroundImage: "url(/image1.png)",
              }}
              className="bg-center bg-cover bg-no-repeat h-full w-full rounded-lg flex justify-start items-end bg-gray-600 p-2"
            >
              {/* username and image */}
              <div className="py-1 pr-4 pl-1 bg-slate-800 rounded-full flex items-center justify-center gap-2">
                <figure
                  style={{
                    backgroundImage:
                      "url(https://cdn.discordapp.com/avatars/935277122816184391/6397cf001c57f27b5020dd6e095f183c.webp)",
                  }}
                  className="bg-center bg-cover bg-no-repeat w-6 h-6 rounded-full border shadow-sm"
                ></figure>
                <span className="text-base">@divuzki</span>
              </div>
            </figure>
            <div className="flex flex-col gap-2 font-bold font-mono justify-start items-start p-2 w-full rounded-lg bg-[#607d8b1a]">
              <span className="uppercase text-lg">Angry Robot</span>
              <span className="text-gray-400 text-sm">0.12 SOL</span>
              <div className="flex gap-4 text-base">
                <div className="bg-slate-800 px-3 py-1 rounded-md shadow-md uppercase">
                  blurry
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded-md shadow-md uppercase">
                  3d-file
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Drops */}
      <div className="py-8 opacity-75 flex flex-col gap-4">
        <h3 className="text-gray-100 uppercase flex md:justify-start justify-center text-lg md:pl-4">
          Featured drops
        </h3>
        <div className="flex flex-wrap gap-4 justify-center w-full md:px-4">
          {/* list */}
          {featured_drops_list.map((n, idx) => (
            <div
              key={idx}
              className="md:w-72 w-[20rem] h-96 rounded-3xl bg-slate-800 overflow-hidden flex flex-col justify-start items-start px-2 py-4"
            >
              {/* username and image */}
              <div className="pt-2 pb-4 bg-slate-800 rounded-full flex items-center justify-start gap-3">
                <figure className="w-7 h-7 bg-black rounded-full border shadow-sm"></figure>
                <span className="text-base">@{n.username}</span>
              </div>
              <figure
                style={{
                  backgroundImage: `url(${n.image})`,
                }}
                className="bg-center bg-cover bg-no-repeat h-full w-full rounded-lg flex justify-start items-end bg-gray-600 p-2"
              ></figure>
            </div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="py-8 opacity-75 flex flex-col gap-8 md:px-4 px-2">
        <h3 className="text-gray-100 uppercase font-bold flex justify-center text-5xl md:pl-4">
          Team
        </h3>
        <div className="w-full flex flex-wrap md:justify-start justify-center px-[50px]">
          {/* list */}
          {list_of_members.map((n, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-2">
              <figure
                style={{
                  backgroundImage: `url(${n.image})`,
                }}
                className="bg-center w-[128px] hover:scale-110 transition-all shadow-2xl hover:shadow-slate-800 cursor-pointer h-[128px] bg-cover bg-no-repeat"
              ></figure>
              <div className="flex flex-col gap-2">
                <span className="text-white font-bold uppercase text-lg">
                  {n.name}
                </span>
                <span className="text-gray-400 font-bold uppercase text-sm">
                  {n.position}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
