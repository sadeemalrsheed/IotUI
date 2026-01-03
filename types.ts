
import React from 'react';

export interface SensorDataPoint {
  time: string;
  moisture: number;
  temp: number;
}

export interface NPKStatus {
  label: string;
  value: string;
  status: string;
  color: string;
  bg: string;
}

export interface QuickSensor {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export type Language = 'ar' | 'en';

export interface TranslationStrings {
  serviceIoT: string;
  serviceIoTDesc: string;
  irrigationDashboard: string;
  active: string;
  soilMoisture: string;
  lastWatered: string;
  npkDashboard: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  iotStatus: {
    good: string;
    low: string;
    high: string;
  };
  acidity: string;
  temp: string;
}