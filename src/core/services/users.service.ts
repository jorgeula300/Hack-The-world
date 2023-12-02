import config from "../config/config";

export async function loginService({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await fetch(config.API_HOST + '/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
}

export async function getAllUsersService({
  token,
  searchValue = '',
  searchFilter = '',
  currentPage = 1,
  pageSize = 25,
} = {}) {
  // await console.log('arguments', arguments)

  if (currentPage === 0) {
    currentPage = 1;
  }

  return await fetch(
    config.API_HOST +
      `/api/users?currentPage=${currentPage}&pageSize=${pageSize}${
        searchValue && `&searchValue=${searchValue}`
      }${searchValue && `&searchFilter=${searchFilter}`}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
}

export async function getUsersRolesService(token) {
  return await fetch(config.API_HOST + '/api/users/roles', {
    headers: {
      Authorization: token,
    },
  });
}

export async function addOrEditOneUserService(token, data, edit, id) {
  let formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    value && formData.append(`${key}`, value);
  }

  // for (const name in data) {
  //   formData.append(name, data[name])
  // }
  // console.log('data.image in addOrEditOneUserService', data.image)
  // console.log('formData', formData)

  return edit
    ? await fetch(config.API_HOST + '/api/user/' + id, {
        method: 'PUT',
        headers: {
          Authorization: token,
          // crossOrigin: 'anonymous',
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ ...data }),
        body: formData,
      })
    : await fetch(config.API_HOST + '/api/users', {
        method: 'POST',
        headers: {
          Authorization: token,
          // crossOrigin: 'anonymous',
          // 'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });
}

export async function getOneUserService(token, id) {
  return await fetch(config.API_HOST + '/api/user/' + id, {
    headers: {
      Authorization: token,
    },
  });
}
