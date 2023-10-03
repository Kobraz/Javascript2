// export const doFetch = async (url, options = {}) => {
//   console.log("Do fetch now");

//   try {
//     const response = await fetch(url, options);
//     const json = await response.json();
//     return json;
//   } catch {
//     console.log(error);
//   }
// };

export const doFetch = async (url, options = {}) => {
  try {
    const combinedOptions = {
      header: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    console.log(combinedOptions);

    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch {
    console.log(error);
  }
};
