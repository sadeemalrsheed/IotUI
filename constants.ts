
import { SensorDataPoint, TranslationStrings } from './types';

export const MOCK_SENSOR_DATA: SensorDataPoint[] = [
  { time: '06:00', moisture: 55, temp: 22 },
  { time: '08:00', moisture: 62, temp: 24 },
  { time: '10:00', moisture: 58, temp: 27 },
  { time: '12:00', moisture: 50, temp: 31 },
  { time: '14:00', moisture: 45, temp: 33 },
  { time: '16:00', moisture: 65, temp: 29 },
  { time: '18:00', moisture: 70, temp: 25 },
  { time: '20:00', moisture: 68, temp: 23 },
];

export const TRANSLATIONS: Record<'ar' | 'en', TranslationStrings> = {
  ar: {
    serviceIoT: 'خدمة إنترنت الأشياء الزراعي',
    serviceIoTDesc: 'مراقبة وتحليل بيانات التربة والبيئة لحظياً لتحسين جودة المحاصيل.',
    irrigationDashboard: 'لوحة تحكم الري',
    active: 'نشط',
    soilMoisture: 'رطوبة التربة',
    lastWatered: 'آخر ري',
    npkDashboard: 'لوحة تحكم NPK',
    nitrogen: 'نيتروجين',
    phosphorus: 'فسفور',
    potassium: 'بوتاسيوم',
    iotStatus: {
      good: 'جيد',
      low: 'منخفض',
      high: 'مرتفع',
    },
    acidity: 'الحموضة',
    temp: 'الحرارة',
  },
  en: {
    serviceIoT: 'Agricultural IoT Service',
    serviceIoTDesc: 'Real-time monitoring and analysis of soil and environment data.',
    irrigationDashboard: 'Irrigation Dashboard',
    active: 'Active',
    soilMoisture: 'Soil Moisture',
    lastWatered: 'Last Watered',
    npkDashboard: 'NPK Dashboard',
    nitrogen: 'Nitrogen',
    phosphorus: 'Phosphorus',
    potassium: 'Potassium',
    iotStatus: {
      good: 'Good',
      low: 'Low',
      high: 'High',
    },
    acidity: 'Acidity',
    temp: 'Temp',
  }
};