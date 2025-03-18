import { Category, MapCategoryType } from "../types";
import { NewsRes } from "../types/news.type";

export const NavbarSelectData = (data: Category[] | []): MapCategoryType[] => {
  const result: MapCategoryType[] = data?.map((item) => {
    return {
      label: item?.name,
      path: item?.subcategories ? item.subcategories : "",
      isSubCategory: item?.subcategories?.length >= 2,
      subcategory: !item.subcategories
        ? []
        : item?.subcategories?.map((item) => {
            return {
              id: item.id,
              path: item.id,
              label: item.name,
            };
          }),
    };
  });
  return result;
};

export const newsDataMap = (data: NewsRes[] | [], id: string) => {
  const allNews: any[] = data.map((item) => {
    if (item.id !== id) {
      return {
        img: item.main_image.path,
        title: item.title,
        created: item.created_at,
        id: item.id,
        category: item.category.name,
      };
    }
  });
  const newsDetail: NewsRes =
    data.find((item) => item.id == id) || ({} as NewsRes);
  const resultNews = allNews.filter((item) => item);
  return { resultNews, newsDetail };
};

export const ModalSelectMap = (data: Category[] | []) => {
  return data.map((item) => {
    return {
      title: item.name,
      items: item.subcategories.map((elm) => {
        return { id: elm.id, label: elm.name, path: `/news/${elm.id}` };
      }),
    };
  });
};

export const formatTimeDifference = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (hours < 24) {
    return hours > 0 ? `${hours} soat oldin` : `${minutes} daqiqa oldin`;
  } else if (days < 3) {
    return `${days} kun oldin`;
  } else {
    const date = new Date(timestamp);
    return date.toLocaleDateString("uz-UZ"); // Masalan, 07.03.2025
  }
};
