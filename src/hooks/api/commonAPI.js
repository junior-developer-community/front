import Http from '../../utils/Http'

export const ping = async () => {
  const {status} = await Http.get('/ping')
  return status === 200
}
