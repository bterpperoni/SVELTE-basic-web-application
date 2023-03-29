export type Structure = {
    structureId: string;
    data: null|string;
}

export type Release = {
	[x: string]: any;
    releaseId: number;
    releaseData: null|string;
    startingDate: Date;
    rulebookCompiledBy: string;
    rulebookCompiledTime: Date;
    startDateModifiedBy: string;
    startDateModifiedTime: Date;
    structureVersion: number;
}