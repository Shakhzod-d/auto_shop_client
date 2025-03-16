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
      };
    }
  });
  const newsDetail: NewsRes =
    data.find((item) => item.id == id) || ({} as NewsRes);
  const resultNews = allNews.filter((item) => item);
  return { resultNews, newsDetail };
};
