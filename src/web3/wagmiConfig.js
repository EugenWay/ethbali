import { createConfig, http } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism, base } from 'wagmi/chains';
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors';

const projectId =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ||
  import.meta.env.VITE_WC_PROJECT_ID ||
  '';

const chains = [mainnet, polygon, arbitrum, optimism, base];

const connectors = [
  injected({ shimDisconnect: true }),
  ...(projectId
    ? [
        walletConnect({
          projectId,
          showQrModal: true,
          metadata: {
            name: 'ETH Bali 2027',
            description: 'ETH Bali 2027 Ticket Access',
            url: 'https://ethbali.cc',
            icons: ['/static/media/ethbali.png'],
          },
        }),
      ]
    : []),
  coinbaseWallet({
    appName: 'ETH Bali 2027',
  }),
];

const transports = Object.fromEntries(chains.map((chain) => [chain.id, http()]));

export const hasWalletConnectProjectId = Boolean(projectId);

export const wagmiConfig = createConfig({
  chains,
  connectors,
  transports,
  ssr: false,
});
