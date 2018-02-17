export const CONTENT = 'CONTENT';

export function activeCont(payload) {

  return {
    type: CONTENT,
    payload: payload
  }
}
