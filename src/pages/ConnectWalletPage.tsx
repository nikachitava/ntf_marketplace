import marketplace_image from "/images/marketplace_image.svg";
import "./ConnectWalletPage.css";
import { WalletCard } from "../assets/components/WalletCard/WalletCard";
import meta_mask from "/images/wallet_icons/metamask_logo.svg";
import coinbase from "/images/wallet_icons/coinbase_logo.svg";
import connect_wallet from "/images/wallet_icons/walletconnect_logo.svg";

export default function ConnectWalletPage() {
  return (
    <div className="connect_wallet_container">
      <div className="img_container">
        <img
          src={marketplace_image}
          alt="marketplace_image"
          className="marketplace_image"
        />
      </div>
      <div className="wallet_section_container">
        <h1 className="connect_wallet_header">Connect Wallet</h1>
        <p className="connect_wallet_subtitle">
          Choose a wallet you want to connect. <br />
          There are several wallet providers.
        </p>
        <div className="wallet_cards_container">
          <WalletCard logo={meta_mask} name="Metamask" />
          <WalletCard logo={connect_wallet} name="Connect Wallet" />
          <WalletCard logo={coinbase} name="Coinbase" />
        </div>
      </div>
    </div>
  );
}
