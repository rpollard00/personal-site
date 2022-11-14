import type { PageLoad } from "./$types"

export const load: PageLoad = ({ locals }: any) => {
  if (locals.user) {
    return {
      user: locals.user
    }
  }

  return {
    user: undefined
    
  }
}