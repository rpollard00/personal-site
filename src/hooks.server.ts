import PocketBase from 'pocketbase';

const PB_URL = "http://127.0.0.1:8090";

interface handleInterface {
  event: any;
  resolve: any;
}

export const handle = async ({ event, resolve }: handleInterface) => {
  event.locals.pocketbase = new PocketBase(PB_URL);
  event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  if (event.locals.pocketbase.authStore.isValid) {
    event.locals.user = JSON.parse(JSON.stringify({ ...event.locals.pocketbase.authStore.model }))
  } else {
    event.locals.user = undefined;
  }

  const response = await resolve(event);

  response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie({ secure: false }));

  return response;
}