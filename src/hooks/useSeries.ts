import { useEffect, useState } from 'react';
import { apiSeries } from '../api/apiSeries';
import type { Series } from '../interfaces/seriesInterface';

export const useSeries = () => {
  const [series, setSeries] = useState<Series[]>([]);
  const [loadginSeries, setLoadingSeries] = useState(true);

  const getSeries = async () => {
    const { data } = await apiSeries();
    setSeries(data.results);
    setLoadingSeries(false);
  };

  useEffect(() => {
    getSeries();
  }, []);

  return {
    series,
    loadginSeries,
  };
};
