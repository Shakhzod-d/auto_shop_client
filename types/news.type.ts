import { Category } from ".";

export interface NewsResType {
  data: NewsRes[];
  status_code: number;
  message: string;
}

export interface NewsRes {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  title_uz: string;
  title_en: string;
  title_ru: string;
  content_uz: string;
  content_en: string;
  content_ru: string;
  slug: string;
  source: string;
  is_draft: boolean;
  is_main: boolean;
  main_image: MainImage;
  category: Category;
  subcategory: Subcategory;
  comment_count: number;
}

export interface MainImage {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  file_name: string;
  path: string;
  size: number;
  mime_type: string;
}

export interface Subcategory {
  banner: BannerData;
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  name_uz: string;
  name_ru: string;
  name_en: string;
  title_uz: string;
  title_ru: string;
  title_en: string;
}
export interface BannerData {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  file_name: string;
  path: string;
  size: number;
  mime_type: string;
}
export interface NewsDetailType {
  category: string;
  title: string;
  msgTotal: number;
  createdDate: string;
  desc: string;
  img: string;
}

export type NewsListType = {
  img: string;
  title: string;
  created: number;
  id: string;
};

// -----------------ads

export interface AdsResData {
  status_code: number;
  message: string;
  data: Ads[];
}

export interface Ads {
  is_active: boolean;
  type: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
  url: string;
  image: Image;
  deleted_at: any;
  id: string;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
}

export interface Image {
  id: string;
  is_active: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  file_name: string;
  path: string;
  size: number;
  mime_type: string;
}
