export const fetchItemsServ = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: T = await res.json();
  return data;
};

export const postItemsServ = async <TRequest, TResponse>(
  url: string,
  newUserObj: TRequest,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<TResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(newUserObj),
  });

  return (await res.json()) as TResponse;
};

export const patchItemsServ = async <TRequest, TResponse>(
  url: string,
  updateObj: TRequest,
  headers: Record<string, string> = { "Content-Type": "application/json" }
): Promise<TResponse> => {
  const res = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify(updateObj),
  });

  return (await res.json()) as TResponse;
};

//  ==================================================    Api post Data Start    ===========

// const { mutate: createCategoryFn, isPending: isUpdating } = useMutation({
//   mutationFn: (obj: CategoryType) =>
//     postItemsServ(
//       `https://api.autoshop.samarkandcargo.com/api/category`,
//       obj
//     ),
//   onSuccess: (data) => {
//     console.log(data);
//     if (data) {
//       alert("Success");
//       refetch();
//     }
//   },
//   onError: (error: any) => {
//     alert(error.message || "Something went wrong");
//   },
// });

// const handleSubmit = () => {
//   const obj: CategoryType = {
//     name_uz: "Avtomobillar",
//     name_ru: "Автомобили",
//     name_en: "Cars",
//   };
//   createCategoryFn(obj);
// };

// ======================================================     Api Post data end    =================
