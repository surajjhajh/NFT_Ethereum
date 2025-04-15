import React from "react";

const TransferTokensInfo = () => {
  const handleClick = () => {
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <div>
        <button
          className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          Show Info About Transferring ERC721
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-90 overflow-y-auto">
            <h3 className="font-bold text-lg">Transferring Individual NFTs</h3>
            <div className="py-4 text-xl">
              <p>
                In this step, we transfer individual tokens directly to other
                users, moving each NFT separately to ensure unique ownership
                changes.
              </p>
              <br />
              <p>
                This one-by-one transfer process is ideal for personal exchanges
                or gifting specific tokens, as each NFT retains its distinct
                attributes. By transferring tokens individually, we offer a
                personalized way to manage and share unique digital assets.
              </p>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TransferTokensInfo;
