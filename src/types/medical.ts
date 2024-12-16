export interface VitalSigns {
  temperature: number;
  heartRate: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  respiratoryRate: number;
  oxygenSaturation: number;
  timestamp: Date;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  bloodType: string;
  medicalHistory: string[];
  currentMedications: string[];
}

export interface DiagnosticResult {
  id: string;
  patientId: string;
  timestamp: Date;
  symptoms: string[];
  diagnosis: string[];
  confidence: number;
  recommendedActions: string[];
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface AlertThresholds {
  temperature: { min: number; max: number };
  heartRate: { min: number; max: number };
  bloodPressure: {
    systolic: { min: number; max: number };
    diastolic: { min: number; max: number };
  };
  respiratoryRate: { min: number; max: number };
  oxygenSaturation: { min: number; max: number };
}