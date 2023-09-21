export interface LegalGuardianResponse {
  legalGuardianResponseDto: {
    id: number;
    name: string;
    father_last_name: string;
    mother_last_name: string;
    documentType: string;
    documentNumber: string;
    address: string;
    cell_phone: string;
    email: string;
    active: string;
  };

  adolescentResponseDto: {
    id: number;
    name: string;
    father_last_name: string;
    mother_last_name: string;
    documentType: string;
    documentNumber: string;
    address: string;
    cell_phone: string;
    email: string;
    active: string;
  };

  family: {
    id: number;
    idLegalGuardian: number;
    idAdolescent: number;
    active: string;
    description: string;
  };
}
