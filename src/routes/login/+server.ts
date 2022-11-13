import type { RequestHandler } from './$types';

interface postInterface {
  request: any;
  locals: any;
}

export const POST: RequestHandler = async ({ request, locals }: postInterface) => {
  const { email, password } = await request.json();

  try {
    const { token, user } =  await locals.pocketbase.users.authViaEmail(email, password)
    const body = {
      token,
      user
    }
    return new Response(JSON.stringify(body), { 
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    if (error.status === 400) {
      return new Response("invalid credentials")
    }
    console.log("ERROR", error)
    console.log(error.type)
    return new Response("Unknown error")
  }
  
  //console.log('response to login request', response)

}