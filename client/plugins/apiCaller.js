export default function ({ $axios, store, env, redirect }, inject) {
  const api = $axios.create({ baseURL: env.baseUrl });
  api.setHeader('Content-Type', 'application/json', ['post']);

  api.onRequest((req) => {
    const userSession = sessionStorage.getItem('user');
    if (userSession)
      req.headers.authorization = `bearer ${
        JSON.parse(userSession).access_token
      }`;
  });

  const apiCaller = function (apiCallFunc, hasLoading = true) {
    return async function () {
      let result;
      let timeout;
      let isLoadingActivated = false;
      try {
        if (hasLoading) {
          timeout = setTimeout(() => {
            isLoadingActivated = true;
            store.dispatch('setLoadingState', true);
          }, 200);
        }
        result = await apiCallFunc(api);
      } catch (e) {
        // const message =
        //   e.message && e.message !== 'null' ? e.message : 'خطایی رخ داده است';
        // const payload = {
        //   config: {
        //     color: 'error',
        //     title: message,
        //   },
        //   timer: notifTimer,
        // };
        // store.dispatch('notification/notify', payload);
        result = false;
      } finally {
        if (isLoadingActivated) store.dispatch('setLoadingState', false);
        else clearTimeout(timeout);
      }
      return result;
    };
  };
  inject('apiCaller', apiCaller);
}
