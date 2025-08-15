export interface FileInfo {
  name: string;
  uri: string;
  type: string;
}

export type FileCompat = File | Blob | FileInfo;