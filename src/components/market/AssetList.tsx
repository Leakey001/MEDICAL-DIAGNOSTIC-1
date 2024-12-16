import React from 'react';
import { useMarketStore } from '@/store/marketStore';
import { AssetListHeader } from './AssetListHeader';
import { AssetListRow } from './AssetListRow';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { useMarketData } from '@/hooks/useMarketData';

export const AssetList: React.FC = () => {
  const { setAssets, setSelectedAsset } = useMarketStore();
  const { data: assets, isLoading, error } = useMarketData();

  React.useEffect(() => {
    if (assets) {
      setAssets(assets);
    }
  }, [assets, setAssets]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load market data" />;
  if (!assets) return null;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <AssetListHeader />
        <tbody className="divide-y divide-gray-200">
          {assets.map((asset) => (
            <AssetListRow
              key={asset.id}
              asset={asset}
              onSelect={setSelectedAsset}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};