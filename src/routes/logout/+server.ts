import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (event) => {
  const { request, locals }: any = event
  const logout = await locals.pocketbase.authStore.clear();  

  return new Response("Logout successful")
}


// export const actions: Actions = {
//   default: async (event) => {
//     const { request, locals }: any = event
//     console.log("EVENT", event)
//     const formData = await request.formData();
//     const email = formData.get('email')
//     const password = formData.get('password')

//     try {
//       const { token, user } = await locals.pocketbase.users.authViaEmail(email, password)
//       console.log("TOKEN", token)
//       console.log("USER", user)
//       const body = {
//         token,
//         user
//       }

//       return { success: true }
//       // return new Response(JSON.stringify(body), { 
//       //   headers: { 'Content-Type': 'application/json' }
//       // })
//     } catch (error: any) {
//       if (error.status === 400) {
//         return invalid(400, { email, incorrect: true })
//       }
//       console.log("ERROR", error)

//       return new Response("Unknown error")
//     }
    
//     //console.log('response to login request', response)
  
//   }

// }