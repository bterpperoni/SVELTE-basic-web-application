export type Structure = {
    structureId: string;
    data: null|string;
}

export type Release = {
    releaseId: string;
    releaseData: null|string;
    startingDate: Date;
    rulebookCompiledBy: string;
    rulebookCompiledTime: Date;
    startDateModifiedBy: string;
    startDateModifiedTime: Date;
    structureVersion: number;
}