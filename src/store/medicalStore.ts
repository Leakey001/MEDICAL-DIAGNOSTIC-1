import { create } from 'zustand';
import { Patient, VitalSigns, DiagnosticResult } from '@/types/medical';

interface MedicalState {
  patients: Patient[];
  currentPatient: Patient | null;
  vitalSigns: VitalSigns[];
  diagnosticResults: DiagnosticResult[];
  setPatients: (patients: Patient[]) => void;
  setCurrentPatient: (patient: Patient | null) => void;
  addVitalSigns: (vitals: VitalSigns) => void;
  addDiagnosticResult: (result: DiagnosticResult) => void;
}

export const useMedicalStore = create<MedicalState>((set) => ({
  patients: [],
  currentPatient: null,
  vitalSigns: [],
  diagnosticResults: [],
  setPatients: (patients) => set({ patients }),
  setCurrentPatient: (patient) => set({ currentPatient: patient }),
  addVitalSigns: (vitals) => 
    set((state) => ({ 
      vitalSigns: [...state.vitalSigns, vitals] 
    })),
  addDiagnosticResult: (result) =>
    set((state) => ({
      diagnosticResults: [...state.diagnosticResults, result]
    }))
}));