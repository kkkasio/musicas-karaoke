import { useRouter } from 'next/router'

const MusicInfo = () => {
  const router = useRouter();
  const { cantor, musica } = router.query;
  return (
    <>
      <p>Cantor: {cantor}</p>
      <p>Cantor: {musica}</p>
    </>
  )
}

export default MusicInfo
