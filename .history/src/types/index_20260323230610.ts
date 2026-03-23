// src/types/index.ts
export interface CaseFile {
  id: string;
  title: string;
  timestamp: string;
  category: "GENERAL" | "SECURITY" | "MAINTENANCE";
  content: string;
  isPriority: boolean;
}
