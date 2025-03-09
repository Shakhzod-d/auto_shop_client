import { Category, MapCategoryType } from "../types";

export const NavbarSelectData = (data: Category[] | []): MapCategoryType[] => {
  const result: MapCategoryType[] = data?.map((item) => {
    return {
      label: item?.name_uz,
      path: item?.subcategories ? item.subcategories : "",
      isSubCategory: item?.subcategories?.length >= 2,
      subcategory: !item.subcategories
        ? []
        : item?.subcategories?.map((item) => {
            return {
              id: item.id,
              path: item.id,
              label: item.name_uz,
            };
          }),
    };
  });
  return result;
};
