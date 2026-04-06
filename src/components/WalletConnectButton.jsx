import { useEffect, useMemo, useState } from 'react';
import { useAccount, useChainId, useConnect, useDisconnect } from 'wagmi';
import { hasWalletConnectProjectId } from '../web3/wagmiConfig';

function shortAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function chainLabel(chainId) {
  const map = {
    1: 'Ethereum Mainnet',
    137: 'Polygon',
    42161: 'Arbitrum One',
    10: 'Optimism',
    8453: 'Base',
  };
  return map[chainId] || `Chain ${chainId}`;
}

function connectorLabel(connector) {
  if (connector.id === 'walletConnect') return 'WalletConnect';
  if (connector.id === 'coinbaseWalletSDK') return 'Coinbase Wallet';
  if (connector.id === 'injected') return 'Browser Wallet';
  return connector.name;
}

function isConnectorRecommended(connector) {
  return connector.id === 'walletConnect' || connector.id === 'injected';
}

function WalletConnectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connectors, connect, error, isPending, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();

  const buttonLabel = useMemo(() => {
    if (isConnected && address) return shortAddress(address);
    return 'Connect';
  }, [address, isConnected]);

  useEffect(() => {
    if (isConnected) setIsOpen(false);
  }, [isConnected]);

  useEffect(() => {
    if (!isOpen) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-900 rounded-full font-syne font-medium text-sm uppercase tracking-tight transition-all duration-300 ${
          isConnected
            ? 'bg-slate-900 text-yellow-300 hover:bg-yellow-300 hover:text-slate-900'
            : 'text-slate-900 hover:bg-slate-900 hover:text-yellow-300'
        }`}
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close wallet modal"
            className="absolute inset-0 bg-slate-900/70"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-md rounded-3xl border-2 border-slate-900 bg-yellow-300 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-syne text-xs uppercase tracking-tight text-slate-700">Wallet</p>
                <h3 className="font-syne font-semibold text-3xl tracking-tighter uppercase text-slate-900">
                  Connect
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full border-2 border-slate-900 bg-yellow-200 text-slate-900 font-semibold"
              >
                ×
              </button>
            </div>

            {isConnected && address && (
              <div className="mt-4 rounded-2xl border-2 border-slate-900 bg-white/70 p-3">
                <p className="font-syne text-xs uppercase tracking-tight text-slate-700">Connected</p>
                <p className="font-syne font-semibold text-sm tracking-tight text-slate-900 mt-1">{address}</p>
                <p className="text-xs text-slate-700 mt-1">{chainLabel(chainId)}</p>
              </div>
            )}

            <div className="mt-5 space-y-3">
              {connectors.map((connector) => {
                const label = connectorLabel(connector);
                const recommended = isConnectorRecommended(connector);
                const isWalletConnectConnector = connector.id === 'walletConnect';
                const disabledByConfig = isWalletConnectConnector && !hasWalletConnectProjectId;
                const pending = isPending && pendingConnector?.id === connector.id;

                return (
                  <button
                    key={`${connector.id}-${connector.name}`}
                    type="button"
                    onClick={() => connect({ connector })}
                    disabled={isPending || disabledByConfig}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl border-2 border-slate-900 bg-white text-slate-900 font-syne uppercase tracking-tight text-sm hover:bg-slate-900 hover:text-yellow-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{pending ? `Connecting ${label}...` : label}</span>
                    <span className="text-xs">
                      {disabledByConfig ? 'Need Project ID' : recommended ? 'Recommended' : 'Available'}
                    </span>
                  </button>
                );
              })}
            </div>

            {error && (
              <p className="mt-4 text-xs text-rose-700 font-medium">{error.message}</p>
            )}

            {!hasWalletConnectProjectId && (
              <p className="mt-3 text-xs text-slate-700">
                To enable WalletConnect QR, add{' '}
                <span className="font-semibold">VITE_WALLETCONNECT_PROJECT_ID</span> in your env.
              </p>
            )}

            <div className="mt-5 flex items-center justify-between">
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-tight border-b border-slate-900 text-slate-900 hover:text-blue-700 hover:border-blue-700"
              >
                Install Wallet
              </a>

              {isConnected && (
                <button
                  type="button"
                  onClick={() => disconnect()}
                  className="text-xs uppercase tracking-tight border-b border-slate-900 text-slate-900 hover:text-rose-700 hover:border-rose-700"
                >
                  Disconnect
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WalletConnectButton;
