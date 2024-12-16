import { create } from 'zustand';
import { CryptoAsset } from '@/types/crypto';

interface MarketState {
  assets: CryptoAsset[];
  selectedAsset: string | null;
  setAssets: (assets: CryptoAsset[]) => void;
  setSelectedAsset: (assetId: string) => void;
}

export const useMarketStore = create<MarketState>((set) => ({
  assets: [],
  selectedAsset: null,
  setAssets: (assets) => set({ assets }),
  setSelectedAsset: (assetId) => set({ selectedAsset: assetId })
}));