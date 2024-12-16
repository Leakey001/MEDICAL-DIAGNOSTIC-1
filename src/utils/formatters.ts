export const formatVitals = {
  temperature: (value: number) => `${value.toFixed(1)}°C`,
  heartRate: (value: number) => `${value} bpm`,
  bloodPressure: (bp: { systolic: number; diastolic: number }) => 
    `${bp.systolic}/${bp.diastolic} mmHg`,
  respiratoryRate: (value: number) => `${value} /min`,
  oxygenSaturation: (value: number) => `${value}%`
};

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};