import PocketBase from 'pocketbase';

const PB_URL = "http://127.0.0.1:8090";

interface handleInterface {
  event: any;
  resolve: any;
}

export const handle = async ({ event, resolve }: handleInterface) => {
  // console.log("Event", event)
  console.log("Resolve", resolve)
  event.locals.pocketbase = new PocketBase(PB_URL);

  event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

  const response = await resolve(event);

  response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie({ secure: false }));

  return response;
}