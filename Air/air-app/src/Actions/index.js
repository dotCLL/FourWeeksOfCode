export const CONTENT = 'CONTENT';

export function activeCont(active) {

  return {
    type: CONTENT,
    payload: active
  }
}
