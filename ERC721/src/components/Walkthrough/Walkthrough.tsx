import Link from "next/link";
import React from "react";

const Walkthrough = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 to-blue-300 min-h-screen flex flex-col">
      <div className="my-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-2xl">Step 1</time>
              <div className="text-2xl font-black">
                <a href="./launcherc721">Deploy ERC721 Contract</a>
              </div>
              <p className="text-xl">
                In this process, we first deploy an ERC-721 contract to create a
                unique NFT collection. During deployment, we specify the
                contracts name and symbol, which serve as identifiers for the
                collection. After the contract is successfully deployed, we can
                mint NFTs to individual addresses, each token carrying unique
                metadata.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-2xl">Step 2</time>
              <div className="text-2xl font-black">
                <a href="./getcontractsbyuser">
                  Get the ERC721 contract Address
                </a>
              </div>
              <p className="text-xl">
                To retrieve the ERC-721 contract address, we will use the users
                public key to identify any associated NFT contracts. By querying
                the blockchain with the users address, we can locate any
                deployed ERC-721 contracts linked to that address.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-2xl">Step 3</time>
              <div className="text-2xl font-black">
                <a href="./mintnft">
                  Mint the NFTs to the associated contract address
                </a>
              </div>
              <p className="text-xl">
                In this step, we will mint NFTs to the previously deployed
                contract using the contract address and an NFT URI. The URI
                includes essential metadata such as the NFTs name, symbol,
                image, and description. This information is stored off-chain and
                linked to the NFT, defining its unique attributes. By minting,
                we add new tokens to the collection, making them available for
                ownership and transfer.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-2xl">
                Step 4 (Optional)
              </time>
              <div className="text-xl font-black">
                <a href="./approve">Approve NFT</a>
              </div>
              <p className="text-xl">
                In this step, we enable NFT approvals, allowing a specified
                spender to transfer the NFT on behalf of the owner. With this
                approval, marketplaces gain permission to manage the NFT in
                escrow for potential sale. This setup provides flexibility, as
                approved platforms can list and sell the NFT while keeping it
                secure. This feature streamlines transactions, making it easier
                to buy and sell NFTs on marketplaces.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-2xl">
                Step 5 (Optional)
              </time>
              <div className="text-xl font-black">
                <Link href="/approveallnfts">Approve All NFTs</Link>
              </div>
              <p className="text-xl">
                In this step, we authorize all NFTs within a specific smart
                contract for approval, allowing designated platforms to manage
                them collectively. This is particularly useful for marketplaces
                or escrow services, as it enables the bulk purchase or transfer
                of NFTs.
              </p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-2xl">Step 6</time>
              <div className="text-xl font-black">
                <a href="./transfertoken">Transfer NFTs</a>
              </div>
              <p className="text-xl">
                In this step, we transfer individual tokens directly to other
                users, ensuring each NFT is moved separately. This process
                enables unique asset ownership changes on a one-by-one basis. It
                is ideal for personal exchanges or gifting specific tokens to
                others.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Walkthrough;
