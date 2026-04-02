/**
 * 文件项接口
 */
export interface FileItem {
  name: string;
  url: string;
  bytes?: number;
  uploadUserName?: string;
  uploadTime?: string;
  originalFilename?: string;
  typeStatus?: string;
  printType?: string;
}
